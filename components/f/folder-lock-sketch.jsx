import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/txbke2bqd.css';
import '../../css/b/bp_fuo5aq.css';
import '../../css/l/lt_h75dyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="txbke2bqd"/><path class="bp_fuo5aq wm-k"/><path class="lt_h75dyx wm-a"/></g>`,
		"fallback": "withicons:folder-lock-sketch",
	});
}

export default Component;
