import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el0u0wbjg.css';

const viewBox = {"width":243,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el0u0wbjg"/>`,
		"fallback": "file-icons:dhall",
	});
}

export default Component;
