import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv9k0bb1u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv9k0bb1u"/>`,
		"fallback": "fa7-solid:clipboard-check",
	});
}

export default Component;
