import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn36-5bgz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn36-5bgz"/>`,
		"fallback": "fa7-solid:briefcase-medical",
	});
}

export default Component;
