import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhyd7y0si.css';
import '../../css/m/mk4_tsbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhyd7y0si"/><path class="mk4_tsbqc"/></g>`,
		"fallback": "coolicons:flag-checkered-bulk-round",
	});
}

export default Component;
