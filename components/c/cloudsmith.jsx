import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5fdesb1o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5fdesb1o"/>`,
		"fallback": "fa7-brands:cloudsmith",
	});
}

export default Component;
