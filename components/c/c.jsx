import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnv9l0mjl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnv9l0mjl"/>`,
		"fallback": "cib:c",
	});
}

export default Component;
