import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0ij6bnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0ij6bnc"/>`,
		"fallback": "selfhst:garlic-hub",
	});
}

export default Component;
