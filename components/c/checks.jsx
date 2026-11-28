import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p5mesdpni.css';
import '../../css/t/tyaxfbi6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p5mesdpni"/><path class="tyaxfbi6j"/></g>`,
		"fallback": "iconaut:checks",
	});
}

export default Component;
