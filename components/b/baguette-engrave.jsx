import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/di6-n2bva.css';
import '../../css/r/ritfql38f.css';
import '../../css/w/wevkxlbtt.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="di6-n2bva wm-k"/><path class="ritfql38f wm-shadow"/><path class="wevkxlbtt wm-k"/><path class="f545reb7b wm-a"/></g>`,
		"fallback": "withicons:baguette-engrave",
	});
}

export default Component;
