import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stcan_o_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stcan_o_h"/>`,
		"fallback": "fxemoji:anchor",
	});
}

export default Component;
