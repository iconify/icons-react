import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgtybyb_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgtybyb_m"/>`,
		"fallback": "game-icons:gemini",
	});
}

export default Component;
