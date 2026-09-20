import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cakwvye_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cakwvye_b"/>`,
		"fallback": "mdi:camera-plus",
	});
}

export default Component;
