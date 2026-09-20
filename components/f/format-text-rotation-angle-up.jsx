import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxfxniffl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxfxniffl"/>`,
		"fallback": "mdi:format-text-rotation-angle-up",
	});
}

export default Component;
