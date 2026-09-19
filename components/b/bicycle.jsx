import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rqx0pywvi.css';
import '../../css/h/hz_ovn6wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rqx0pywvi"/><path class="hz_ovn6wb"/></g>`,
		"fallback": "hugeicons:bicycle",
	});
}

export default Component;
