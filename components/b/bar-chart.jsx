import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhj1p2osp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhj1p2osp"/>`,
		"fallback": "bx:bar-chart",
	});
}

export default Component;
