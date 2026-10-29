import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hx238obel.css';
import '../../css/k/kbd8pobja.css';
import '../../css/r/r6zdo0mwd.css';
import '../../css/z/zki05l2_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hx238obel"/><path class="kbd8pobja wm-shadow"/><path class="r6zdo0mwd"/><path class="zki05l2_a"/></g>`,
		"fallback": "withicons:clover-engrave",
	});
}

export default Component;
