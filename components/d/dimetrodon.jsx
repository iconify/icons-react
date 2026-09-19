import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni2wf1t7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni2wf1t7r"/>`,
		"fallback": "game-icons:dimetrodon",
	});
}

export default Component;
