import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kheaoj4ys.css';
import '../../css/t/t_glypoyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kheaoj4ys"/><path class="t_glypoyp"/>`,
		"fallback": "boxicons:circuit-board",
	});
}

export default Component;
