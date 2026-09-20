import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixgce_ygq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixgce_ygq"/>`,
		"fallback": "majesticons:arrow-up-circle",
	});
}

export default Component;
