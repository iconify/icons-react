import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu8lmhlyf.css';
import '../../css/x/x-lneybgu.css';
import '../../css/c/cqnzudg2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yu8lmhlyf"/><path class="x-lneybgu"/><path clip-rule="evenodd" class="cqnzudg2w"/></g>`,
		"fallback": "streamline-color:bomb-flat",
	});
}

export default Component;
