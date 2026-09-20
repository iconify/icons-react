import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h0w5ne-of.css';
import '../../css/b/b-enbxq2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h0w5ne-of"/><path class="b-enbxq2i"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-bitcoin-graph-increase",
	});
}

export default Component;
