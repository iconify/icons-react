import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1-4s6ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_1-4s6ox"/>`,
		"fallback": "mage:basket-fill",
	});
}

export default Component;
