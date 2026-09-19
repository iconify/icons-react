import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a15lhxb4h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a15lhxb4h"/>`,
		"fallback": "fa7-brands:edge-legacy",
	});
}

export default Component;
