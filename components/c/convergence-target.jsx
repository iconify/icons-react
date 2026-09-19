import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf0e2sbms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf0e2sbms"/>`,
		"fallback": "game-icons:convergence-target",
	});
}

export default Component;
