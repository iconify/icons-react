import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg-0_nb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg-0_nb4x"/>`,
		"fallback": "cil:arrow-thick-from-bottom",
	});
}

export default Component;
