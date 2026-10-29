import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2t9kvrcl.css';
import '../../css/e/e5drqabmo.css';
import '../../css/e/eerhch8on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w2t9kvrcl"/><path class="e5drqabmo wm-shadow"/><path class="eerhch8on"/></g>`,
		"fallback": "withicons:check-engrave",
	});
}

export default Component;
