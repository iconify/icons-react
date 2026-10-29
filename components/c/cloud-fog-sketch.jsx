import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ux9cud9mt.css';
import '../../css/h/hfc2uy8bf.css';
import '../../css/r/ru6p1kbvy.css';
import '../../css/n/nerchcc2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ux9cud9mt"/><path class="hfc2uy8bf wm-a"/><path class="ru6p1kbvy wm-k"/><path class="nerchcc2i wm-a"/></g>`,
		"fallback": "withicons:cloud-fog-sketch",
	});
}

export default Component;
