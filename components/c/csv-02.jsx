import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dbb05ccxf.css';
import '../../css/s/ss4vhobdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dbb05ccxf"/><path class="ss4vhobdn"/></g>`,
		"fallback": "hugeicons:csv-02",
	});
}

export default Component;
