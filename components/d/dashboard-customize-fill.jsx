import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwvj7pbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwvj7pbap"/>`,
		"fallback": "si:dashboard-customize-fill",
	});
}

export default Component;
