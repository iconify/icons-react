import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/asa0p3b5y.css';
import '../../css/s/ss4vhobdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="asa0p3b5y"/><path class="ss4vhobdn"/></g>`,
		"fallback": "hugeicons:doc-02",
	});
}

export default Component;
