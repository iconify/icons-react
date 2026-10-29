import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j69w18q7w.css';
import '../../css/m/m-yk4bbsg.css';
import '../../css/b/be1mx_mxo.css';
import '../../css/e/enzm_x5xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j69w18q7w"/><path class="m-yk4bbsg wm-a"/><path class="be1mx_mxo wm-k"/><path class="enzm_x5xp wm-a"/></g>`,
		"fallback": "withicons:cloud-sun-sketch",
	});
}

export default Component;
