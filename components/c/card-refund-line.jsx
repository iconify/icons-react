import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mji4-fs_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mji4-fs_l"/>`,
		"fallback": "mingcute:card-refund-line",
	});
}

export default Component;
