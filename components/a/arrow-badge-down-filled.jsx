import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz41l0bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz41l0bdc"/>`,
		"fallback": "tabler:arrow-badge-down-filled",
	});
}

export default Component;
