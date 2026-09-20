import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hft_ef9qv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hft_ef9qv"/>`,
		"fallback": "oi:info",
	});
}

export default Component;
