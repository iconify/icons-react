import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/han3ucbhe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="han3ucbhe"/>`,
		"fallback": "dinkie-icons:accept-circle",
	});
}

export default Component;
