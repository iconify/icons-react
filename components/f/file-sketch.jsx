import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hjq72zbjr.css';
import '../../css/m/mhi-85bhf.css';
import '../../css/r/rvti0ccgj.css';
import '../../css/e/esqay42vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hjq72zbjr"/><path class="mhi-85bhf wm-k"/><path class="rvti0ccgj wm-k"/><path class="esqay42vk wm-a"/></g>`,
		"fallback": "withicons:file-sketch",
	});
}

export default Component;
