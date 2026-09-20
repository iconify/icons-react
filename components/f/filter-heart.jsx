import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipx_1529y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipx_1529y"/>`,
		"fallback": "tabler:filter-heart",
	});
}

export default Component;
