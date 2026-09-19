import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro3btb_ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro3btb_ny"/>`,
		"fallback": "game-icons:delivery-drone",
	});
}

export default Component;
