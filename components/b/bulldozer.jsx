import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wipq2ibhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wipq2ibhk"/>`,
		"fallback": "game-icons:bulldozer",
	});
}

export default Component;
