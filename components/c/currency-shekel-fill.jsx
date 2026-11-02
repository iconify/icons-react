import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwql_sdta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwql_sdta"/>`,
		"fallback": "mingcute:currency-shekel-fill",
	});
}

export default Component;
