import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opmu8tq_u.css';
import '../../css/a/asa3nfbte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opmu8tq_u"/><path class="asa3nfbte"/></g>`,
		"fallback": "streamline-color:airplane-disabled",
	});
}

export default Component;
