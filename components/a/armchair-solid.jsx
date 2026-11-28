import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3j1ybfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if3j1ybfv"/>`,
		"fallback": "iconaut:armchair-solid",
	});
}

export default Component;
