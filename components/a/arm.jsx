import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jddsx1v0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jddsx1v0j"/>`,
		"fallback": "game-icons:arm",
	});
}

export default Component;
