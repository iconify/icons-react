import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qatnpcbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qatnpcbcr"/>`,
		"fallback": "lucide:flip-horizontal",
	});
}

export default Component;
