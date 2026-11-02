import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqd_eqbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqd_eqbed"/>`,
		"fallback": "mingcute:currency-cny-fill",
	});
}

export default Component;
