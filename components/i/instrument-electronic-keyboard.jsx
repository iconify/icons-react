import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt8g_ac0r.css';
import '../../css/p/prpah_g1x.css';
import '../../css/v/vom3nj2sc.css';
import '../../css/e/eysmyi_kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wt8g_ac0r"/><path class="prpah_g1x"/><path class="vom3nj2sc"/><path class="eysmyi_kf"/></g>`,
		"fallback": "streamline-freehand-color:instrument-electronic-keyboard",
	});
}

export default Component;
