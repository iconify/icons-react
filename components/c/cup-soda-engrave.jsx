import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cgzrd6bda.css';
import '../../css/v/vk17_kbpb.css';
import '../../css/k/kwicdkbyg.css';
import '../../css/d/dy6f-b0he.css';
import '../../css/d/djl3n2rtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cgzrd6bda wm-k"/><path class="vk17_kbpb wm-a"/><path class="kwicdkbyg wm-shadow"/><path class="dy6f-b0he wm-k"/><path class="djl3n2rtw wm-a"/></g>`,
		"fallback": "withicons:cup-soda-engrave",
	});
}

export default Component;
