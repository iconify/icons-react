import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmsr6_k5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmsr6_k5e"/>`,
		"fallback": "ci:filter",
	});
}

export default Component;
