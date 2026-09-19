import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkbm2ibaj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkbm2ibaj"/>`,
		"fallback": "fa-brands:accusoft",
	});
}

export default Component;
