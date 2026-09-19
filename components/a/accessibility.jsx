import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy3zah5lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy3zah5lz"/>`,
		"fallback": "boxicons:accessibility",
	});
}

export default Component;
