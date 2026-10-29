import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xu_ouqb1p.css';
import '../../css/g/g9a4gtryo.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xu_ouqb1p"/><path class="g9a4gtryo wm-shadow"/><path class="jstsvibwd wm-k"/><path class="n8lapqogo wm-a"/></g>`,
		"fallback": "withicons:dumpling-engrave",
	});
}

export default Component;
