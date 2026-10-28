import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yj8m3uu7f.css';
import '../../css/v/vtr3_vbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yj8m3uu7f"/><path class="vtr3_vbvu"/></g>`,
		"fallback": "lucide:calendar-arrow-right",
	});
}

export default Component;
