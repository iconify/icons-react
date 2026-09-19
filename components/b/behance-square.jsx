import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsq3reb0h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsq3reb0h"/>`,
		"fallback": "fa-brands:behance-square",
	});
}

export default Component;
