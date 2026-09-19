import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdkb-obmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdkb-obmv"/>`,
		"fallback": "game-icons:egg-pod",
	});
}

export default Component;
