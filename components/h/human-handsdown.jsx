import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xssxl197b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xssxl197b"/>`,
		"fallback": "pixelarticons:human-handsdown",
	});
}

export default Component;
