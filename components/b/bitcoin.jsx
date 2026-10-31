import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fm1yr4nhr.css';
import '../../css/h/h3k30-bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fm1yr4nhr"/><path class="h3k30-bnj"/></g>`,
		"fallback": "withicons-retro:bitcoin",
	});
}

export default Component;
