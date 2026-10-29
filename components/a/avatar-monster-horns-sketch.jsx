import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wejio6ivs.css';
import '../../css/h/hq38tccqi.css';
import '../../css/y/yjuie1_qo.css';
import '../../css/k/k_1g644cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wejio6ivs"/><path class="hq38tccqi wm-a"/><path class="wm-k yjuie1_qo"/><path class="k_1g644cr wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-horns-sketch",
	});
}

export default Component;
