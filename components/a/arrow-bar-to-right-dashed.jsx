import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg2686ecp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg2686ecp"/>`,
		"fallback": "tabler:arrow-bar-to-right-dashed",
	});
}

export default Component;
