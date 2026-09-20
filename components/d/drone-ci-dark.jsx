import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4t0l33wp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4t0l33wp"/>`,
		"fallback": "selfhst:drone-ci-dark",
	});
}

export default Component;
