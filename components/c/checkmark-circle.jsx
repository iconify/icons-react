import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu1u2abpn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu1u2abpn"/>`,
		"fallback": "f7:checkmark-circle",
	});
}

export default Component;
