import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh7avqmdc.css';
import '../../css/o/ouv_s_bld.css';
import '../../css/e/ekkzpbcrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh7avqmdc"/><path class="ouv_s_bld"/><path class="ekkzpbcrm"/></g>`,
		"fallback": "reicon:envelopes-filled",
	});
}

export default Component;
