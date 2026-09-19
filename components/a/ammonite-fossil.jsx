import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxlqgxbbk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxlqgxbbk"/>`,
		"fallback": "game-icons:ammonite-fossil",
	});
}

export default Component;
