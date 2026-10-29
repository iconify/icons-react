import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/huw4-tbyz.css';
import '../../css/x/xv4sdqbgf.css';
import '../../css/o/o-fwz22nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="huw4-tbyz"/><path class="wm-shadow xv4sdqbgf"/><path class="o-fwz22nq"/></g>`,
		"fallback": "withicons:circle-dashed-engrave",
	});
}

export default Component;
