import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v43vsl3of.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v43vsl3of"/>`,
		"fallback": "f7:giftcard-fill",
	});
}

export default Component;
