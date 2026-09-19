import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g665e95jg.css';
import '../../css/o/o4orebb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="g665e95jg"/><path class="o4orebb1j"/></g>`,
		"fallback": "hugeicons:file-video",
	});
}

export default Component;
