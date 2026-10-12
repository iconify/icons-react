import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsd7icbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsd7icbda"/>`,
		"fallback": "andrsrxn:currency-brl",
	});
}

export default Component;
