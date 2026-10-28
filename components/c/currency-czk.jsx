import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qulx01_ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qulx01_ul"/>`,
		"fallback": "andrsrxn:currency-czk",
	});
}

export default Component;
