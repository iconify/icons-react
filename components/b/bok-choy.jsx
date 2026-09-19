import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvslmzb-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvslmzb-e"/>`,
		"fallback": "game-icons:bok-choy",
	});
}

export default Component;
