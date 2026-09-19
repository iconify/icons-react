import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_tdmcb6r.css';

const viewBox = {"width":344,"height":424};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_tdmcb6r"/>`,
		"fallback": "zmdi:airline-seat-recline-normal",
	});
}

export default Component;
