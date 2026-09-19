import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6oe_bc7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6oe_bc7c"/>`,
		"fallback": "cbi:hino",
	});
}

export default Component;
