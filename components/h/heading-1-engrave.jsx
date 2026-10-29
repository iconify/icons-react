import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgxljyz3r.css';
import '../../css/w/wqpjdjb2g.css';
import '../../css/n/nqkbd8bil.css';
import '../../css/r/r14mvzszd.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/l/l532kjbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jgxljyz3r wm-k"/><path class="wm-a wqpjdjb2g"/><path class="nqkbd8bil wm-s"/><path class="r14mvzszd wm-shadow"/><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="l532kjbmd wm-s"/></g>`,
		"fallback": "withicons:heading-1-engrave",
	});
}

export default Component;
