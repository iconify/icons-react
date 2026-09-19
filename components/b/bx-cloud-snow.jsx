import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toc-9jzis.css';
import '../../css/t/tprbgvb_u.css';
import '../../css/q/qerqc_trz.css';
import '../../css/o/oa7jysr2p.css';
import '../../css/j/j60zr3b4x.css';
import '../../css/y/ysz5rctuu.css';
import '../../css/y/y8mkib1ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toc-9jzis"/><circle class="tprbgvb_u"/><circle class="qerqc_trz"/><circle class="oa7jysr2p"/><circle class="j60zr3b4x"/><circle class="ysz5rctuu"/><circle class="y8mkib1ak"/>`,
		"fallback": "bx:bx-cloud-snow",
	});
}

export default Component;
