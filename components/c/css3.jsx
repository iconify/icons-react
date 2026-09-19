import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6fxnxb1a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6fxnxb1a"/>`,
		"fallback": "fa7-brands:css3",
	});
}

export default Component;
