import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdy04lnro.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdy04lnro"/>`,
		"fallback": "zmdi:filter-center-focus",
	});
}

export default Component;
