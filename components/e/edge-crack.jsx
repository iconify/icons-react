import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inexm0bxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inexm0bxc"/>`,
		"fallback": "game-icons:edge-crack",
	});
}

export default Component;
