import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-5_y5zdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-5_y5zdm"/>`,
		"fallback": "heroicons:chat-bubble-left-20-solid",
	});
}

export default Component;
