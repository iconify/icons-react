import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xef-lsb9x.css';
import '../../css/r/rnn19t8kn.css';
import '../../css/b/bbqj_ib9r.css';
import '../../css/c/cxmghqd7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xef-lsb9x"/><path class="rnn19t8kn wm-a"/><path class="bbqj_ib9r wm-k"/><path class="cxmghqd7h wm-a"/></g>`,
		"fallback": "withicons:arrow-down-to-line-sketch",
	});
}

export default Component;
