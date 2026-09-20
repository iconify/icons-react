import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pa11swbbp.css';
import '../../css/e/e6yrqacor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pa11swbbp"/><path class="e6yrqacor"/></g>`,
		"fallback": "thesvg:docsearch",
	});
}

export default Component;
