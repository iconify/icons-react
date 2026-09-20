import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml-hxubcc.css';
import '../../css/d/d74yqobky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ml-hxubcc"/><path class="d74yqobky"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-fill",
	});
}

export default Component;
