import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysrry-bqw.css';
import '../../css/j/jbyiw1r0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysrry-bqw"/><path class="jbyiw1r0w"/>`,
		"fallback": "boxicons:arrow-out-down-left-circle-filled",
	});
}

export default Component;
