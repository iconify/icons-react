import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfzhtmbxu.css';
import '../../css/b/bmz0dzmey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfzhtmbxu"/><path class="bmz0dzmey"/>`,
		"fallback": "mingcute:cardano-ada-line",
	});
}

export default Component;
