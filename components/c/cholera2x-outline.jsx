import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5uxspbsz.css';
import '../../css/d/d-wxtvbko.css';
import '../../css/u/u08m17z2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d5uxspbsz"/><path class="d-wxtvbko"/><path clip-rule="evenodd" class="u08m17z2o"/></g>`,
		"fallback": "healthicons:cholera2x-outline",
	});
}

export default Component;
