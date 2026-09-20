import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32m7abvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32m7abvc"/>`,
		"fallback": "tabler:filter-cog",
	});
}

export default Component;
