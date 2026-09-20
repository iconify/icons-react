import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5fdbb3rh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5fdbb3rh"/>`,
		"fallback": "memory:gamepad-left-fill",
	});
}

export default Component;
