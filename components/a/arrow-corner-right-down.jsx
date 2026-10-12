import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc-419bse.css';
import '../../css/i/i8xc3jo0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sc-419bse"/><path class="i8xc3jo0b"/></g>`,
		"fallback": "andrsrxn:arrow-corner-right-down",
	});
}

export default Component;
