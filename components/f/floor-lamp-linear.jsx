import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/z/zcqpw-bie.css';
import '../../css/y/y93r_0nnf.css';
import '../../css/x/xd4f9coez.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/ohb9m9k_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="zcqpw-bie"/><path class="y93r_0nnf"/><path class="xd4f9coez"/><path class="j02jjxvbk"/><path class="ohb9m9k_z"/></g>`,
		"fallback": "solar:floor-lamp-linear",
	});
}

export default Component;
