import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5i_e_qgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5i_e_qgw"/>`,
		"fallback": "ps:bank-safe",
	});
}

export default Component;
