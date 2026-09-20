import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfivj4bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfivj4bdz"/>`,
		"fallback": "streamline-sharp:chess-knight-remix",
	});
}

export default Component;
