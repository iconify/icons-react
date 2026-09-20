import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbrs86bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbrs86bpp"/>`,
		"fallback": "uil:battery-empty",
	});
}

export default Component;
