import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayo0r2bzm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayo0r2bzm"/>`,
		"fallback": "fa7-solid:cash-register",
	});
}

export default Component;
