import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh39thb0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh39thb0k"/>`,
		"fallback": "zondicons:border-none",
	});
}

export default Component;
