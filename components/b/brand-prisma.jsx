import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5t9mub8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5t9mub8r"/>`,
		"fallback": "tabler:brand-prisma",
	});
}

export default Component;
