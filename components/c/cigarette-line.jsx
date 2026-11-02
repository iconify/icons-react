import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klvl_bb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klvl_bb2q"/>`,
		"fallback": "mingcute:cigarette-line",
	});
}

export default Component;
