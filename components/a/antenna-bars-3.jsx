import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfdzu3bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfdzu3bdh"/>`,
		"fallback": "tabler:antenna-bars-3",
	});
}

export default Component;
