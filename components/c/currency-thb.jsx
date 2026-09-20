import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuct18m8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuct18m8u"/>`,
		"fallback": "mdi:currency-thb",
	});
}

export default Component;
