import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk8rr7b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk8rr7b9w"/>`,
		"fallback": "reicon:branch-down-filled",
	});
}

export default Component;
