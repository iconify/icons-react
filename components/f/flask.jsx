import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzh5g6b7d.css';
import '../../css/y/ynhs8qbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzh5g6b7d"/><path class="ynhs8qbaa"/></g>`,
		"fallback": "codex:flask",
	});
}

export default Component;
