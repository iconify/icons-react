import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/secb7r11d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secb7r11d"/>`,
		"fallback": "mdi:compressed-file",
	});
}

export default Component;
