import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4wfglb7q.css';
import '../../css/d/datb84q6e.css';
import '../../css/m/m9i7a_vaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="c4wfglb7q"/><path class="datb84q6e"/><path class="m9i7a_vaj"/></g>`,
		"fallback": "hugeicons:file-chart-pie",
	});
}

export default Component;
