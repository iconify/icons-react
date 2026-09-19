import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml9fjm54e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml9fjm54e"/>`,
		"fallback": "game-icons:artichoke",
	});
}

export default Component;
