import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samsx_54e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="samsx_54e"/>`,
		"fallback": "streamline:desktop-game-solid",
	});
}

export default Component;
