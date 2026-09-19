import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb1thxfbd.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb1thxfbd"/>`,
		"fallback": "fa:cc-diners-club",
	});
}

export default Component;
