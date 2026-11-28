import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5o0gccin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5o0gccin primary"/>`,
		"fallback": "iconaut:dna-duotone",
	});
}

export default Component;
