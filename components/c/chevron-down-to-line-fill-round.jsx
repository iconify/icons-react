import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbpay4bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbpay4bms"/>`,
		"fallback": "coolicons:chevron-down-to-line-fill-round",
	});
}

export default Component;
