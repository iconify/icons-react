import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unyc-m8wb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unyc-m8wb"/>`,
		"fallback": "selfhst:habitica-dark",
	});
}

export default Component;
