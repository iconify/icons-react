import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnfwjq3mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnfwjq3mb"/>`,
		"fallback": "mdi:controller-round-left",
	});
}

export default Component;
