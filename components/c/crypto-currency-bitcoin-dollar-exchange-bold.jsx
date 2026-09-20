import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft95ixbdo.css';
import '../../css/h/hw6ek8bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft95ixbdo"/><path class="hw6ek8bqo"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-dollar-exchange-bold",
	});
}

export default Component;
