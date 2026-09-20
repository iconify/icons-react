import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p0vwl-byi.css';
import '../../css/v/ve6znjbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p0vwl-byi"/><path class="ve6znjbkh"/></g>`,
		"fallback": "solar:bonfire-bold-duotone",
	});
}

export default Component;
