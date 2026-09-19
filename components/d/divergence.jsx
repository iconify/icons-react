import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or7x6dsdo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or7x6dsdo"/>`,
		"fallback": "game-icons:divergence",
	});
}

export default Component;
