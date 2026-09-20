import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pglh9qbns.css';
import '../../css/w/wez7bcbwt.css';
import '../../css/n/ns-o5mhfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pglh9qbns"/><path clip-rule="evenodd" class="wez7bcbwt"/><path clip-rule="evenodd" class="ns-o5mhfn"/></g>`,
		"fallback": "streamline-flex-color:credit-card-4-flat",
	});
}

export default Component;
