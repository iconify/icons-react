import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f56jpdb2d.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f56jpdb2d"/>`,
		"fallback": "ps:dry",
	});
}

export default Component;
