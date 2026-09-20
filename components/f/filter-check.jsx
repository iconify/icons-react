import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-s5j9brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-s5j9brm"/>`,
		"fallback": "tabler:filter-check",
	});
}

export default Component;
