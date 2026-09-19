import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cto2kz5ar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cto2kz5ar"/>`,
		"fallback": "game-icons:dig-dug",
	});
}

export default Component;
