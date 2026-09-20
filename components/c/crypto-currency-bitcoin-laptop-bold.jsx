import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmd-u2nlq.css';
import '../../css/a/axndlm-lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmd-u2nlq"/><path class="axndlm-lm"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-laptop-bold",
	});
}

export default Component;
