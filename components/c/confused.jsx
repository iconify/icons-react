import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdo4_sr4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdo4_sr4h"/>`,
		"fallback": "ci:confused",
	});
}

export default Component;
