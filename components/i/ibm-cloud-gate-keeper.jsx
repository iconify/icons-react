import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6dy7ob-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6dy7ob-l"/>`,
		"fallback": "carbon:ibm-cloud-gate-keeper",
	});
}

export default Component;
