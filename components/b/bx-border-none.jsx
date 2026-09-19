import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w62k3153g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w62k3153g"/>`,
		"fallback": "bx:bx-border-none",
	});
}

export default Component;
