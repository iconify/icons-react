import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpsmi2bfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpsmi2bfn"/>`,
		"fallback": "game-icons:conqueror",
	});
}

export default Component;
