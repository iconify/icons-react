import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thvx2i49h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thvx2i49h"/>`,
		"fallback": "streamline-plump:chess-pawn-solid",
	});
}

export default Component;
