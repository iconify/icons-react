import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyf64obgb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyf64obgb"/>`,
		"fallback": "fa7-solid:gopuram",
	});
}

export default Component;
