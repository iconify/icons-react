import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipm2-g_7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipm2-g_7x"/>`,
		"fallback": "typcn:adjust-contrast",
	});
}

export default Component;
