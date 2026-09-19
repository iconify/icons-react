import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxwx0kb2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxwx0kb2x"/>`,
		"fallback": "game-icons:flowers",
	});
}

export default Component;
