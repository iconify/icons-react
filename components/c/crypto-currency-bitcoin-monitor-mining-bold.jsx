import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsf19acra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsf19acra"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-monitor-mining-bold",
	});
}

export default Component;
