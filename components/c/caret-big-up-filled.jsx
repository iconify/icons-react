import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx_bh6bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx_bh6bcb"/>`,
		"fallback": "boxicons:caret-big-up-filled",
	});
}

export default Component;
