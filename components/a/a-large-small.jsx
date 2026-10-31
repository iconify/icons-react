import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ayvtapbch.css';
import '../../css/i/iigruabtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ayvtapbch"/><path class="iigruabtk"/></g>`,
		"fallback": "withicons-retro:a-large-small",
	});
}

export default Component;
