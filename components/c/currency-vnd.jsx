import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf0p-ybka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf0p-ybka"/>`,
		"fallback": "andrsrxn:currency-vnd",
	});
}

export default Component;
