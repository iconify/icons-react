import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttidz-lwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttidz-lwv"/>`,
		"fallback": "carbon:ibm-watson-speech-to-text",
	});
}

export default Component;
