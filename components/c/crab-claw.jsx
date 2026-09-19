import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg0_v2f9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg0_v2f9b"/>`,
		"fallback": "game-icons:crab-claw",
	});
}

export default Component;
