import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn8hsfb6u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn8hsfb6u"/>`,
		"fallback": "fa7-brands:amazon-pay",
	});
}

export default Component;
