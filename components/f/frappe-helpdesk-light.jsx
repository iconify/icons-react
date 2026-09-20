import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5zbbubku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5zbbubku"/>`,
		"fallback": "selfhst:frappe-helpdesk-light",
	});
}

export default Component;
