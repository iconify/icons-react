import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_q9dm1pu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_q9dm1pu"/>`,
		"fallback": "f7:exclamationmark-bubble-fill",
	});
}

export default Component;
