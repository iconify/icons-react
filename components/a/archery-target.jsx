import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozdtx1bre.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozdtx1bre"/>`,
		"fallback": "game-icons:archery-target",
	});
}

export default Component;
