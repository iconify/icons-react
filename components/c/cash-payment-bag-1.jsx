import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wgum6wtue.css';
import '../../css/d/d30dd2pkp.css';
import '../../css/g/g4-pf7_je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wgum6wtue"/><path class="d30dd2pkp"/><path class="g4-pf7_je"/></g>`,
		"fallback": "streamline-freehand-color:cash-payment-bag-1",
	});
}

export default Component;
