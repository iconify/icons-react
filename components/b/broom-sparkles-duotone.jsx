import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwf_9bqte.css';
import '../../css/c/caqknhb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cwf_9bqte secondary"/><path class="caqknhb2o primary"/></g>`,
		"fallback": "iconaut:broom-sparkles-duotone",
	});
}

export default Component;
