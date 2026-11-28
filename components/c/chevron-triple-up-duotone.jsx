import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-3k0obzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q-3k0obzz"/>`,
		"fallback": "iconaut:chevron-triple-up-duotone",
	});
}

export default Component;
