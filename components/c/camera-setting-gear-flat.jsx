import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ihgksv09y.css';
import '../../css/w/wlv96q80v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ihgksv09y"/><path class="wlv96q80v"/></g>`,
		"fallback": "streamline-flex-color:camera-setting-gear-flat",
	});
}

export default Component;
