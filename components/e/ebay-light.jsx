import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfm92hrvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfm92hrvg"/>`,
		"fallback": "selfhst:ebay-light",
	});
}

export default Component;
