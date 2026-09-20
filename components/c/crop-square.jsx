import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ienf_jm6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ienf_jm6k"/>`,
		"fallback": "mdi:crop-square",
	});
}

export default Component;
