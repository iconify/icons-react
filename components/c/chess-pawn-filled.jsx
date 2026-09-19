import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxz985mfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxz985mfn"/>`,
		"fallback": "boxicons:chess-pawn-filled",
	});
}

export default Component;
