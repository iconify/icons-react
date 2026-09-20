import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gryrq_gjn.css';
import '../../css/l/l-jt8nbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gryrq_gjn"/><path class="l-jt8nbfd"/></g>`,
		"fallback": "proicons:folder-multiple",
	});
}

export default Component;
