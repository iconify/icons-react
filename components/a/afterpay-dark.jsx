import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy37wkf-y.css';

const viewBox = {"width":24,"height":23};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy37wkf-y"/>`,
		"fallback": "thesvg-color:afterpay-dark",
	});
}

export default Component;
