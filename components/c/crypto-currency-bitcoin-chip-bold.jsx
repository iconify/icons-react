import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnk8v9b_n.css';
import '../../css/n/nk7gp8b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnk8v9b_n"/><path class="nk7gp8b9h"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-chip-bold",
	});
}

export default Component;
