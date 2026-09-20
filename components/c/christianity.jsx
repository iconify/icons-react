import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcocaccpc.css';
import '../../css/l/l3p3whgbr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcocaccpc"/><path class="l3p3whgbr"/></g>`,
		"fallback": "streamline-color:christianity",
	});
}

export default Component;
