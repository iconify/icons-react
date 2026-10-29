import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/svu_ojrck.css';
import '../../css/l/l3j6m8bxm.css';
import '../../css/n/n2kxb8blp.css';
import '../../css/i/ip9ou-86q.css';
import '../../css/o/opvnhmoea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="svu_ojrck wm-k"/><path class="l3j6m8bxm wm-shadow"/><path class="n2kxb8blp wm-k"/><path class="ip9ou-86q wm-k"/><path class="opvnhmoea wm-a"/></g>`,
		"fallback": "withicons:history-engrave",
	});
}

export default Component;
