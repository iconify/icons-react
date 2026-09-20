import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk3k_6m-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk3k_6m-c"/>`,
		"fallback": "mdi:barcode-off",
	});
}

export default Component;
