import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1j79ab8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1j79ab8k"/>`,
		"fallback": "game-icons:eclipse-saw",
	});
}

export default Component;
