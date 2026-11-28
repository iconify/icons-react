import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5x5g5zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5x5g5zt"/>`,
		"fallback": "noviair-light:contact-minus",
	});
}

export default Component;
