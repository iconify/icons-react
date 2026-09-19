import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75lp1bfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75lp1bfi"/>`,
		"fallback": "cil:gif",
	});
}

export default Component;
