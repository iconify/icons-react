import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouulk7_aq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouulk7_aq"/>`,
		"fallback": "game-icons:boots",
	});
}

export default Component;
