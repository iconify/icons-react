import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t-6yolbrn.css';
import '../../css/a/ai8_npn0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="t-6yolbrn"/><path class="ai8_npn0k"/></g>`,
		"fallback": "streamline-ultimate:align-stroke-to-center",
	});
}

export default Component;
