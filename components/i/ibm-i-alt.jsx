import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rat7_dmns.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rat7_dmns"/>`,
		"fallback": "carbon:ibm-i-alt",
	});
}

export default Component;
