import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc3gkdbzj.css';
import '../../css/z/zyzkrebsi.css';
import '../../css/p/pn5p_4bad.css';
import '../../css/j/jnylkqbmu.css';
import '../../css/d/dtqicdcih.css';
import '../../css/j/jz4ai8brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kc3gkdbzj wm-k"/><path class="wm-k zyzkrebsi"/><path class="pn5p_4bad wm-k"/><path class="jnylkqbmu wm-k"/><path class="dtqicdcih wm-shine"/><path class="jz4ai8brd wm-a"/></g>`,
		"fallback": "withicons-anime:candy-cane",
	});
}

export default Component;
