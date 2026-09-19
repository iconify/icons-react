import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2z099a8i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2z099a8i"/>`,
		"fallback": "fa7-regular:contact-card",
	});
}

export default Component;
