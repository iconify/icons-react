import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_vkl9uws.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_vkl9uws"/>`,
		"fallback": "dinkie-icons:eight-of-circles-mahjong-filled",
	});
}

export default Component;
