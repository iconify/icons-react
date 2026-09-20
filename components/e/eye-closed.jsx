import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqrkjk4za.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqrkjk4za"/>`,
		"fallback": "system-uicons:eye-closed",
	});
}

export default Component;
