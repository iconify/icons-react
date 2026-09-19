import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eywq5cbon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eywq5cbon"/>`,
		"fallback": "carbon:ibm-engineering-ai-hub",
	});
}

export default Component;
