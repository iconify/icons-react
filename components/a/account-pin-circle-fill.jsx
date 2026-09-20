import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0v_txbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0v_txbuj"/>`,
		"fallback": "ri:account-pin-circle-fill",
	});
}

export default Component;
