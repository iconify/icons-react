import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1xs4ji-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1xs4ji-e"/>`,
		"fallback": "game-icons:colombia",
	});
}

export default Component;
