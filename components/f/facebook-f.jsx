import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emp192bte.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emp192bte"/>`,
		"fallback": "fa-brands:facebook-f",
	});
}

export default Component;
