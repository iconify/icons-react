import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5512zlau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5512zlau"/>`,
		"fallback": "file-icons:coldfusion",
	});
}

export default Component;
