import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehj399b5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehj399b5r"/>`,
		"fallback": "raphael:biohazard",
	});
}

export default Component;
