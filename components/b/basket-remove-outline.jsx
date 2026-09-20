import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6c7q-smu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6c7q-smu"/>`,
		"fallback": "mdi:basket-remove-outline",
	});
}

export default Component;
