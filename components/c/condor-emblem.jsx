import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w458axn3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w458axn3w"/>`,
		"fallback": "game-icons:condor-emblem",
	});
}

export default Component;
