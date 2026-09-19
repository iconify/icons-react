import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubi-4pbio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubi-4pbio"/>`,
		"fallback": "famicons:cloud-upload",
	});
}

export default Component;
