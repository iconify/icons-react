import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in33yub4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in33yub4e"/>`,
		"fallback": "selfhst:cyberhaven",
	});
}

export default Component;
