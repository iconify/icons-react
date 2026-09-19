import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y7dj--m8h.css';
import '../../css/t/tu--bwbmo.css';
import '../../css/q/qdc-w_0om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y7dj--m8h"/><path class="tu--bwbmo"/><path class="qdc-w_0om"/></g>`,
		"fallback": "hugeicons:audio-book-03",
	});
}

export default Component;
