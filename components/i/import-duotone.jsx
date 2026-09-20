import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iizw_3bqg.css';
import '../../css/a/atuquqb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iizw_3bqg"/><path clip-rule="evenodd" class="atuquqb-h"/></g>`,
		"fallback": "reicon:import-duotone",
	});
}

export default Component;
