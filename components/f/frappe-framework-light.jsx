import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5p6zcb4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5p6zcb4c"/>`,
		"fallback": "selfhst:frappe-framework-light",
	});
}

export default Component;
