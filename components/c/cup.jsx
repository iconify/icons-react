import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxgd7ub6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxgd7ub6b"/>`,
		"fallback": "boxicons:cup",
	});
}

export default Component;
