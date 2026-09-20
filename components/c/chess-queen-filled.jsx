import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4kyljbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4kyljbeg"/>`,
		"fallback": "tabler:chess-queen-filled",
	});
}

export default Component;
