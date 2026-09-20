import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l9wlv6bwf.css';
import '../../css/l/laxg67brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="l9wlv6bwf"/><path class="laxg67brp"/></g>`,
		"fallback": "lets-icons:form-light",
	});
}

export default Component;
