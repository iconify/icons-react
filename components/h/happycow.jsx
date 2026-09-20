import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3g0hmf1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3g0hmf1r"/>`,
		"fallback": "thesvg-color:happycow",
	});
}

export default Component;
