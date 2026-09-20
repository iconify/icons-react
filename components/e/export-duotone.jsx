import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iizw_3bqg.css';
import '../../css/t/trdmd9-hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iizw_3bqg"/><path clip-rule="evenodd" class="trdmd9-hm"/></g>`,
		"fallback": "reicon:export-duotone",
	});
}

export default Component;
