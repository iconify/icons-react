import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqwl1ubue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqwl1ubue"/>`,
		"fallback": "boxicons:draw-ahead-filled",
	});
}

export default Component;
