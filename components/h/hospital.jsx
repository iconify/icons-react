import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2g9aacmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2g9aacmb"/>`,
		"fallback": "game-icons:hospital",
	});
}

export default Component;
