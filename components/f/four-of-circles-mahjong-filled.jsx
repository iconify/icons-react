import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qua7fvb1e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qua7fvb1e"/>`,
		"fallback": "dinkie-icons:four-of-circles-mahjong-filled",
	});
}

export default Component;
