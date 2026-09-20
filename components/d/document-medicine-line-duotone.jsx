import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/l/l_xqm9bsu.css';
import '../../css/o/oqzpqv97y.css';
import '../../css/b/byonj9b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jjq2qh_fp"/><path class="l_xqm9bsu"/><path class="oqzpqv97y"/><path class="byonj9b2c"/></g>`,
		"fallback": "solar:document-medicine-line-duotone",
	});
}

export default Component;
