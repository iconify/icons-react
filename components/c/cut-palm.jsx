import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqs0mcclm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqs0mcclm"/>`,
		"fallback": "game-icons:cut-palm",
	});
}

export default Component;
