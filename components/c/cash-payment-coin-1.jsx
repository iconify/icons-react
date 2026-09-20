import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/za2nmiyjb.css';
import '../../css/l/lzhkln8wf.css';
import '../../css/d/dscqektuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="za2nmiyjb"/><path class="lzhkln8wf"/><path class="dscqektuk"/></g>`,
		"fallback": "streamline-freehand-color:cash-payment-coin-1",
	});
}

export default Component;
