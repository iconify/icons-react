import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j61frhyna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j61frhyna"/>`,
		"fallback": "simple-icons:babylondotjs",
	});
}

export default Component;
