import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jtgxl_ini.css';
import '../../css/l/lyi99rb3b.css';
import '../../css/l/lrkxigbtx.css';
import '../../css/z/z9-ek8f5j.css';
import '../../css/g/g5ykuz3vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jtgxl_ini wm-k"/><path class="lyi99rb3b wm-a"/><path class="lrkxigbtx wm-shadow"/><path class="wm-k z9-ek8f5j"/><path class="g5ykuz3vl wm-a"/></g>`,
		"fallback": "withicons:case-lower-engrave",
	});
}

export default Component;
