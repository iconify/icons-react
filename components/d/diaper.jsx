import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kg35o5bpv.css';
import '../../css/z/z4hbfskwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kg35o5bpv"/><path class="z4hbfskwf"/></g>`,
		"fallback": "hugeicons:diaper",
	});
}

export default Component;
