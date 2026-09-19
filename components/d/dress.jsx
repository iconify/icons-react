import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3dzr2cxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3dzr2cxa"/>`,
		"fallback": "game-icons:dress",
	});
}

export default Component;
