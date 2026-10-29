import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xw_l8jjfs.css';
import '../../css/s/saqexskah.css';
import '../../css/o/oah_nmb4a.css';
import '../../css/r/rumhxo9iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xw_l8jjfs"/><path class="saqexskah wm-k"/><path class="oah_nmb4a wm-k"/><path class="rumhxo9iv wm-a"/></g>`,
		"fallback": "withicons:cloud-lightning-sketch",
	});
}

export default Component;
