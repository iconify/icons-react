import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iql1arkqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iql1arkqy"/>`,
		"fallback": "game-icons:goo-explosion",
	});
}

export default Component;
