import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy6xpqbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy6xpqbui"/>`,
		"fallback": "streamline-freehand:camera-settings-hand-motion",
	});
}

export default Component;
