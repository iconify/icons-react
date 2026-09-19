import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk2u_7bvs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk2u_7bvs"/>`,
		"fallback": "dinkie-icons:battery-filled",
	});
}

export default Component;
