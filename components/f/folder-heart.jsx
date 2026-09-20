import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq3o2etsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq3o2etsc"/>`,
		"fallback": "mdi:folder-heart",
	});
}

export default Component;
