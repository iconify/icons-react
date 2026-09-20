import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd2gdm8fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd2gdm8fn"/>`,
		"fallback": "mdi:indeterminate-check-box",
	});
}

export default Component;
