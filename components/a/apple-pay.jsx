import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9r1unb9m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9r1unb9m"/>`,
		"fallback": "fa-brands:apple-pay",
	});
}

export default Component;
