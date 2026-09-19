import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxqubt9lt.css';
import '../../css/y/y2d2s5hxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxqubt9lt"/><path class="y2d2s5hxy"/>`,
		"fallback": "bx:bxs-wallet-alt",
	});
}

export default Component;
