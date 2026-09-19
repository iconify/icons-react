import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki1_cbb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki1_cbb2m"/>`,
		"fallback": "game-icons:gooey-daemon",
	});
}

export default Component;
