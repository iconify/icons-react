import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdnfh8bvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdnfh8bvy"/>`,
		"fallback": "la:dna",
	});
}

export default Component;
