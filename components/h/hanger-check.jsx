import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebw6zj4kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebw6zj4kp"/>`,
		"fallback": "noviair-light:hanger-check",
	});
}

export default Component;
