import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk_db6ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk_db6ble"/>`,
		"fallback": "bx:bxs-color-fill",
	});
}

export default Component;
