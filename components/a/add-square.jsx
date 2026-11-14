import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_h01bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_h01bsj"/>`,
		"fallback": "hugeicons:add-square",
	});
}

export default Component;
