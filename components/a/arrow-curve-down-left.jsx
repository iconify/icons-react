import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh7vxndfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh7vxndfa"/>`,
		"fallback": "sidekickicons:arrow-curve-down-left",
	});
}

export default Component;
