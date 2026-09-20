import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c24govbmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c24govbmh"/>`,
		"fallback": "selfhst:google-dark",
	});
}

export default Component;
