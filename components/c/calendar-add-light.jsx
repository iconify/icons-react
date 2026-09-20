import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p5141kjgf.css';
import '../../css/i/izlsm_kiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="p5141kjgf"/><path class="izlsm_kiq"/></g>`,
		"fallback": "lets-icons:calendar-add-light",
	});
}

export default Component;
