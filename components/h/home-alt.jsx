import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaoh63bkz.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaoh63bkz"/>`,
		"fallback": "system-uicons:home-alt",
	});
}

export default Component;
