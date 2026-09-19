import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imv4-q93r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imv4-q93r"/>`,
		"fallback": "hugeicons:chevrons-up",
	});
}

export default Component;
