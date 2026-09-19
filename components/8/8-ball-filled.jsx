import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8xfwqbqk.css';
import '../../css/i/i7-t02b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8xfwqbqk"/><path class="i7-t02b5j"/>`,
		"fallback": "boxicons:8-ball-filled",
	});
}

export default Component;
