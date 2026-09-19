import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua7cgebor.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua7cgebor"/>`,
		"fallback": "fa6-brands:grunt",
	});
}

export default Component;
