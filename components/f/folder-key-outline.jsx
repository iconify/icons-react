import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhw5rlbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhw5rlbpx"/>`,
		"fallback": "mdi:folder-key-outline",
	});
}

export default Component;
