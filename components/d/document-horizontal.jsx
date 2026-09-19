import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdu2pbcie.css';
import '../../css/z/z8gtf7k7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdu2pbcie"/><path class="z8gtf7k7b"/>`,
		"fallback": "carbon:document-horizontal",
	});
}

export default Component;
