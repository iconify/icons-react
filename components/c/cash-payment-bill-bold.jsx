import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl401gbue.css';
import '../../css/x/xjfts2dhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl401gbue"/><path class="xjfts2dhg"/>`,
		"fallback": "streamline-ultimate:cash-payment-bill-bold",
	});
}

export default Component;
