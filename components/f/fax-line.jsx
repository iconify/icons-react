import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quzx1ub2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quzx1ub2j"/>`,
		"fallback": "mingcute:fax-line",
	});
}

export default Component;
