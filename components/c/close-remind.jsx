import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j41nt_b2y.css';
import '../../css/s/saxwgqbsi.css';
import '../../css/x/xtnq2r1jb.css';
import '../../css/k/ki_s5dbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j41nt_b2y"/><path class="saxwgqbsi"/><path clip-rule="evenodd" class="xtnq2r1jb"/><path class="ki_s5dbae"/></g>`,
		"fallback": "icon-park:close-remind",
	});
}

export default Component;
