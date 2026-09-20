import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zwzgwbcve.css';
import '../../css/n/nxt6afaca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zwzgwbcve"/><path class="nxt6afaca"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-give",
	});
}

export default Component;
