import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tbzm2gqcw.css';
import '../../css/w/w_jb_zbpr.css';
import '../../css/l/lr0oojb-x.css';
import '../../css/s/sciz89bxj.css';
import '../../css/v/v8bcv9g6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tbzm2gqcw"/><path class="w_jb_zbpr wm-k"/><path class="lr0oojb-x wm-a"/><path class="sciz89bxj wm-k"/><path class="v8bcv9g6a wm-a"/></g>`,
		"fallback": "withicons:gift-stack-sketch",
	});
}

export default Component;
