import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/m93axi86h.css';
import '../../css/f/fh_iv8bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="m93axi86h"/><path class="fh_iv8bhq"/></g>`,
		"fallback": "hugeicons:cloud-mid-rain",
	});
}

export default Component;
