import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn0e0ac1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn0e0ac1j"/>`,
		"fallback": "hugeicons:elder",
	});
}

export default Component;
