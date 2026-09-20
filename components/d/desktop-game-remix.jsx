import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6s0rjbxz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l6s0rjbxz"/>`,
		"fallback": "streamline:desktop-game-remix",
	});
}

export default Component;
