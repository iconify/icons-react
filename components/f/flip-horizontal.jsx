import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzdgkcc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzdgkcc2n"/>`,
		"fallback": "noviair-light:flip-horizontal",
	});
}

export default Component;
