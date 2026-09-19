import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqvr4v5ky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqvr4v5ky"/>`,
		"fallback": "fa-brands:bitbucket",
	});
}

export default Component;
