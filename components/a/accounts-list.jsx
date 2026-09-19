import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssr9qfzls.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssr9qfzls"/>`,
		"fallback": "zmdi:accounts-list",
	});
}

export default Component;
