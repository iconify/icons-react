import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmlu3limk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmlu3limk"/>`,
		"fallback": "game-icons:air-balloon",
	});
}

export default Component;
