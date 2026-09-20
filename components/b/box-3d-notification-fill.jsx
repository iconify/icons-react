import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rowqs7baj.css';
import '../../css/p/p_tfwbcxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rowqs7baj"/><path class="p_tfwbcxb"/>`,
		"fallback": "mage:box-3d-notification-fill",
	});
}

export default Component;
