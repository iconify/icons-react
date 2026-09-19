import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca-g7ac0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca-g7ac0n"/>`,
		"fallback": "game-icons:cleaver",
	});
}

export default Component;
