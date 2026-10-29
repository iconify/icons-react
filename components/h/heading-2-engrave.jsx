import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgxljyz3r.css';
import '../../css/w/wqpjdjb2g.css';
import '../../css/d/d042wtbft.css';
import '../../css/j/jk7-vabxq.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/m/m22vscbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jgxljyz3r wm-k"/><path class="wm-a wqpjdjb2g"/><path class="d042wtbft wm-s"/><path class="jk7-vabxq wm-shadow"/><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="m22vscbur wm-s"/></g>`,
		"fallback": "withicons:heading-2-engrave",
	});
}

export default Component;
