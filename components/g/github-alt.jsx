import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlznm7l6h.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlznm7l6h"/>`,
		"fallback": "fa-brands:github-alt",
	});
}

export default Component;
