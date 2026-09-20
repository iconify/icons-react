import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy3p889il.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy3p889il"/>`,
		"fallback": "memory:gamepad-empty",
	});
}

export default Component;
