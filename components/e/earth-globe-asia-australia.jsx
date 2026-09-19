import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e893zxb0r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e893zxb0r"/>`,
		"fallback": "dinkie-icons:earth-globe-asia-australia",
	});
}

export default Component;
