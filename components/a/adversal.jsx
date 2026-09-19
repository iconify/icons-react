import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rksunsa6l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rksunsa6l"/>`,
		"fallback": "fa7-brands:adversal",
	});
}

export default Component;
