import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jw2icyv0i.css';
import '../../css/n/nbitbckyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jw2icyv0i"/><path class="nbitbckyf"/></g>`,
		"fallback": "withicons-retro:atom",
	});
}

export default Component;
