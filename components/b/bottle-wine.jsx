import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkxo5wbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkxo5wbvx"/>`,
		"fallback": "mdi:bottle-wine",
	});
}

export default Component;
