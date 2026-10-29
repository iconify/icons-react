import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgxljyz3r.css';
import '../../css/w/wqpjdjb2g.css';
import '../../css/b/b3y2q-bke.css';
import '../../css/q/qo4w_wb3x.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/k/kqkrbm6ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jgxljyz3r wm-k"/><path class="wm-a wqpjdjb2g"/><path class="b3y2q-bke wm-s"/><path class="qo4w_wb3x wm-shadow"/><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="kqkrbm6ip wm-s"/></g>`,
		"fallback": "withicons:heading-3-engrave",
	});
}

export default Component;
