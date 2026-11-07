import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/o9d_ombdl.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/y/y217mfbez.css';
import '../../css/y/y93r_0nnf.css';
import '../../css/x/xd4f9coez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j02jjxvbk"/><path class="o9d_ombdl"/><path class="ick8o1b-y"/><path class="y217mfbez"/><path class="y93r_0nnf"/><path class="xd4f9coez"/></g>`,
		"fallback": "solar:floor-lamp-broken",
	});
}

export default Component;
