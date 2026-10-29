import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/in75zrbcj.css';
import '../../css/c/ciu7xdbqt.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/w/wv0bv_blz.css';
import '../../css/u/ui32hib9b.css';
import '../../css/w/w22j1sy-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="in75zrbcj wm-deco"/><path class="ciu7xdbqt wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="wm-k wv0bv_blz"/><path class="ui32hib9b wm-a"/><path class="w22j1sy-m wm-k"/></g>`,
		"fallback": "withicons:crown-blueprint",
	});
}

export default Component;
