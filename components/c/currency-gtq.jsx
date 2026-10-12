import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwq3i_b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwq3i_b2s"/>`,
		"fallback": "andrsrxn:currency-gtq",
	});
}

export default Component;
