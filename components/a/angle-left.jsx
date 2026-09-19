import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2cgykpmm.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2cgykpmm"/>`,
		"fallback": "fa-solid:angle-left",
	});
}

export default Component;
