import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1uo-p2gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1uo-p2gl"/>`,
		"fallback": "tabler:arrow-move-right-filled",
	});
}

export default Component;
