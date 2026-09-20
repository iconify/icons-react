import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2p--tysj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2p--tysj"/>`,
		"fallback": "mingcute:dogecoin-doge-fill",
	});
}

export default Component;
