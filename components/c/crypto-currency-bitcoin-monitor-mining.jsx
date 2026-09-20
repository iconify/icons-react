import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdm0hbcvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdm0hbcvn"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-monitor-mining",
	});
}

export default Component;
