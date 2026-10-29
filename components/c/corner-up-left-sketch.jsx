import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xb5-n7bdq.css';
import '../../css/t/tndj66ifd.css';
import '../../css/h/h_qwgkbjv.css';
import '../../css/c/c5sy9-16o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xb5-n7bdq"/><path class="tndj66ifd wm-a"/><path class="h_qwgkbjv wm-k"/><path class="c5sy9-16o wm-a"/></g>`,
		"fallback": "withicons:corner-up-left-sketch",
	});
}

export default Component;
