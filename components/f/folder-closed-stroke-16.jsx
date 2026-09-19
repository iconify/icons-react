import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc2ir_ble.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc2ir_ble"/>`,
		"fallback": "garden:folder-closed-stroke-16",
	});
}

export default Component;
