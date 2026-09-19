import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct0xq6blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct0xq6blj"/>`,
		"fallback": "bx:bxs-skip-previous-circle",
	});
}

export default Component;
