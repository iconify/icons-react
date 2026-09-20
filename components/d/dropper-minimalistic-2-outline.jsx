import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ronc_phlw.css';
import '../../css/r/r7o52sv7c.css';
import '../../css/u/uzz_d-3jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ronc_phlw"/><path clip-rule="evenodd" class="r7o52sv7c"/><path clip-rule="evenodd" class="uzz_d-3jm"/></g>`,
		"fallback": "solar:dropper-minimalistic-2-outline",
	});
}

export default Component;
