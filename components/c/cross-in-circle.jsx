import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf1dwnbjg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf1dwnbjg"/>`,
		"fallback": "at-icons:cross-in-circle",
	});
}

export default Component;
