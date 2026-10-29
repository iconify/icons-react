import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_vg7vytr.css';
import '../../css/q/qvpo85bgg.css';
import '../../css/q/qzof9nhok.css';
import '../../css/u/u5j49objb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t_vg7vytr wm-k"/><path class="qvpo85bgg wm-shadow"/><path class="qzof9nhok wm-k"/><path class="u5j49objb wm-a"/></g>`,
		"fallback": "withicons:beef-engrave",
	});
}

export default Component;
