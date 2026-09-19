import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p89o0ebth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p89o0ebth"/>`,
		"fallback": "game-icons:hungary",
	});
}

export default Component;
