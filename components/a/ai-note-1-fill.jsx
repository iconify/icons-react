import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_j62hbkk.css';
import '../../css/c/c9v861dmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_j62hbkk"/><path clip-rule="evenodd" class="c9v861dmc"/>`,
		"fallback": "si:ai-note-1-fill",
	});
}

export default Component;
