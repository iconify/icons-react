import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lr1vtim1w.css';
import '../../css/z/zv4kazqeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lr1vtim1w"/><path class="zv4kazqeq"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-code",
	});
}

export default Component;
