import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azae8fb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azae8fb_e"/>`,
		"fallback": "mdi:external-link",
	});
}

export default Component;
