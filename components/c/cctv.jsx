import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y768vnb3q.css';
import '../../css/o/o5i-1xb7l.css';
import '../../css/w/wbnvzqbna.css';
import '../../css/v/vd3mknmey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow y768vnb3q"/><path class="o5i-1xb7l"/><path class="wbnvzqbna"/><path class="vd3mknmey"/></g>`,
		"fallback": "withicons-retro:cctv",
	});
}

export default Component;
