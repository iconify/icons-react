import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlwkyrbiq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlwkyrbiq"/>`,
		"fallback": "fa7-solid:angle-down",
	});
}

export default Component;
