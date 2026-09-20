import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp9n8x0hd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp9n8x0hd"/>`,
		"fallback": "selfhst:frappe-lending-dark",
	});
}

export default Component;
