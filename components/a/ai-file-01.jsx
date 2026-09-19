import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1cg_brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1cg_brd"/>`,
		"fallback": "hugeicons:ai-file-01",
	});
}

export default Component;
