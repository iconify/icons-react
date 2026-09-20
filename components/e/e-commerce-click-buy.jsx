import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w9w-myx4m.css';
import '../../css/q/qbji8fb1i.css';
import '../../css/m/mj8ragb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w9w-myx4m"/><path class="qbji8fb1i"/><path class="mj8ragb7j"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-click-buy",
	});
}

export default Component;
