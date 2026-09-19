import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd06uhenr.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd06uhenr"/>`,
		"fallback": "ps:dry-flat",
	});
}

export default Component;
