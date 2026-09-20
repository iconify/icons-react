import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfx0_2f9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfx0_2f9y"/>`,
		"fallback": "la:dice-two",
	});
}

export default Component;
