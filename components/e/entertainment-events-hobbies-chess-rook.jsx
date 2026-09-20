import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peqf9mqoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peqf9mqoh"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-chess-rook",
	});
}

export default Component;
