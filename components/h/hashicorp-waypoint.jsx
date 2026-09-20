import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz8y4okya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz8y4okya"/>`,
		"fallback": "selfhst:hashicorp-waypoint",
	});
}

export default Component;
