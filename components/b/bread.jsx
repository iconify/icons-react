import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkl5tz40n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkl5tz40n"/>`,
		"fallback": "dinkie-icons:bread",
	});
}

export default Component;
