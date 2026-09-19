import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue56ucbto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue56ucbto"/>`,
		"fallback": "game-icons:earth-crack",
	});
}

export default Component;
