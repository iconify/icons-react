import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nyu4vab7o.css';
import '../../css/h/hxi54s9-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nyu4vab7o"/><path class="hxi54s9-h"/></g>`,
		"fallback": "hugeicons:ai-beautify",
	});
}

export default Component;
