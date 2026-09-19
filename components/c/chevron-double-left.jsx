import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhnrx_bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhnrx_bfi"/>`,
		"fallback": "heroicons:chevron-double-left",
	});
}

export default Component;
