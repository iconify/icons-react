import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj2r5rupy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj2r5rupy"/>`,
		"fallback": "cil:dog",
	});
}

export default Component;
