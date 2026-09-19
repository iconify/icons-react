import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq3m9lb1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq3m9lb1e"/>`,
		"fallback": "game-icons:energy-breath",
	});
}

export default Component;
