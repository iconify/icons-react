import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qy28_mbsz.css';
import '../../css/m/mq5wepbit.css';
import '../../css/y/yyc9_bcnt.css';
import '../../css/p/p81l2tb_i.css';
import '../../css/k/kl8xqacyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qy28_mbsz wm-shadow"/><path class="mq5wepbit wm-shadow"/><path class="yyc9_bcnt"/><path class="p81l2tb_i"/><path class="kl8xqacyc"/></g>`,
		"fallback": "withicons-brutal:gem",
	});
}

export default Component;
