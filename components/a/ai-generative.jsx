import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nm8an2b-h.css';
import '../../css/u/uk9zb2bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nm8an2b-h"/><path class="uk9zb2bvr"/></g>`,
		"fallback": "hugeicons:ai-generative",
	});
}

export default Component;
