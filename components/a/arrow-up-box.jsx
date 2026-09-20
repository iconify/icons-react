import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbxl4wb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbxl4wb9x"/>`,
		"fallback": "pixelarticons:arrow-up-box",
	});
}

export default Component;
