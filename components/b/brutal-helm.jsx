import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nly-8rbsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nly-8rbsf"/>`,
		"fallback": "game-icons:brutal-helm",
	});
}

export default Component;
