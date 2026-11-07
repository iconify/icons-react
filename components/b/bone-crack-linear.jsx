import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hv308dboi.css';
import '../../css/q/qa___lkpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hv308dboi"/><path class="qa___lkpn"/></g>`,
		"fallback": "solar:bone-crack-linear",
	});
}

export default Component;
