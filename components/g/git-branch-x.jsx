import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej0pdfs8d.css';
import '../../css/b/bmagwps1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ej0pdfs8d"/><path class="bmagwps1n"/></g>`,
		"fallback": "tabler:git-branch-x",
	});
}

export default Component;
