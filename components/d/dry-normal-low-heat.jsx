import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwq6y7vmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwq6y7vmd"/>`,
		"fallback": "ps:dry-normal-low-heat",
	});
}

export default Component;
