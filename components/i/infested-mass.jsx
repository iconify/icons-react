import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxm9r3d5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxm9r3d5g"/>`,
		"fallback": "game-icons:infested-mass",
	});
}

export default Component;
