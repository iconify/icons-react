import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m178_g6sx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m178_g6sx"/>`,
		"fallback": "carbon:arrow-down",
	});
}

export default Component;
