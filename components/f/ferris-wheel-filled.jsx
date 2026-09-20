import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcn7k_b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcn7k_b4t"/>`,
		"fallback": "tdesign:ferris-wheel-filled",
	});
}

export default Component;
