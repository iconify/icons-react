import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkc89nbke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkc89nbke"/>`,
		"fallback": "carbon:ibm-z-os",
	});
}

export default Component;
