import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xps1z-igg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xps1z-igg"/>`,
		"fallback": "tabler:icons",
	});
}

export default Component;
