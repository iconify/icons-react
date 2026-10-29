import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wr50s-93l.css';
import '../../css/p/pyp3in7xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wr50s-93l"/><path class="pyp3in7xr"/></g>`,
		"fallback": "withicons:grip-horizontal-engrave",
	});
}

export default Component;
