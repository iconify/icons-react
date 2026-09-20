import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j02jjxvbk.css';
import '../../css/o/o9d_ombdl.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/e/eqvcnnmyn.css';
import '../../css/n/nzno-7bcb.css';
import '../../css/d/dzj-pac0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j02jjxvbk"/><path class="o9d_ombdl"/><path class="ick8o1b-y"/><path class="eqvcnnmyn"/><path class="nzno-7bcb"/><path class="dzj-pac0y"/></g>`,
		"fallback": "solar:floor-lamp-broken",
	});
}

export default Component;
