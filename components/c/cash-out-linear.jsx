import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ntqzpqbnu.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';
import '../../css/z/zsvh3abtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ntqzpqbnu"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/><path class="zsvh3abtp"/></g>`,
		"fallback": "solar:cash-out-linear",
	});
}

export default Component;
