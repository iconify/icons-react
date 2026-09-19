import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jv55tgqzc.css';
import '../../css/f/fgp0a32qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jv55tgqzc"/><path class="fgp0a32qy"/></g>`,
		"fallback": "hugeicons:imo",
	});
}

export default Component;
