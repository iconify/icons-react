import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddk_lrtal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddk_lrtal"/>`,
		"fallback": "mage:hospital-plus",
	});
}

export default Component;
