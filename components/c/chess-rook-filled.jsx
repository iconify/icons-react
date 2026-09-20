import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxq05gomn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxq05gomn"/>`,
		"fallback": "tabler:chess-rook-filled",
	});
}

export default Component;
