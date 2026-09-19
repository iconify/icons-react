import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awlo-z2_e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awlo-z2_e"/>`,
		"fallback": "carbon:data-glossary",
	});
}

export default Component;
