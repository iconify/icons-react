import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4eqr1bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4eqr1bhq"/>`,
		"fallback": "typcn:heart-full-outline",
	});
}

export default Component;
