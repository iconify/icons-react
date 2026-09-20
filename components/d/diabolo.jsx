import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/p/p1z6z8bfy.css';
import '../../css/e/e11g3ebpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="p1z6z8bfy"/><path class="e11g3ebpc"/></g>`,
		"fallback": "tabler:diabolo",
	});
}

export default Component;
