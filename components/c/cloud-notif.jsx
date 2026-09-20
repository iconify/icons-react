import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/i6d3wibqa.css';
import '../../css/u/u8kz-kcyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="i6d3wibqa"/><path class="u8kz-kcyi"/></g>`,
		"fallback": "reicon:cloud-notif",
	});
}

export default Component;
