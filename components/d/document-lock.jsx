import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llzqa-0gd.css';
import '../../css/w/wkau1rbrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llzqa-0gd"/><path class="wkau1rbrb"/>`,
		"fallback": "famicons:document-lock",
	});
}

export default Component;
