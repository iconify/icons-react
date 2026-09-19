import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmy18lb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmy18lb_z"/>`,
		"fallback": "cbi:dpd",
	});
}

export default Component;
