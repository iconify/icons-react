import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bq-o4gbdh.css';
import '../../css/x/xf34pgbli.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bq-o4gbdh"/><path class="xf34pgbli"/></g>`,
		"fallback": "streamline-flex-color:discount-percent-coupon-flat",
	});
}

export default Component;
