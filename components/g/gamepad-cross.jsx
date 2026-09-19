import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_wm2bcss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_wm2bcss"/>`,
		"fallback": "game-icons:gamepad-cross",
	});
}

export default Component;
