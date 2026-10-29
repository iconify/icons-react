import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a6cwelbwj.css';
import '../../css/e/es45psbqk.css';
import '../../css/b/beoe_ii1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a6cwelbwj"/><path class="es45psbqk wm-shadow"/><path class="beoe_ii1f"/></g>`,
		"fallback": "withicons:butterfly-engrave",
	});
}

export default Component;
