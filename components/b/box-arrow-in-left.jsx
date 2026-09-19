import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n8uesraxc.css';
import '../../css/e/e1v7t-bat.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n8uesraxc"/><path class="e1v7t-bat"/></g>`,
		"fallback": "bi:box-arrow-in-left",
	});
}

export default Component;
