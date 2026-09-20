import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olirf2bph.css';
import '../../css/q/qz4yqq5kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olirf2bph"/><path class="qz4yqq5kt"/>`,
		"fallback": "token:coinex-smart-chain",
	});
}

export default Component;
