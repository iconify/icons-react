import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpjv01h0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpjv01h0u"/>`,
		"fallback": "selfhst:airtable-light",
	});
}

export default Component;
