import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssq8clb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssq8clb7t"/>`,
		"fallback": "mdi-light:account-alert",
	});
}

export default Component;
