import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjag56b6z.css';
import '../../css/s/spwu91kpa.css';
import '../../css/i/iqadukbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjag56b6z"/><path class="spwu91kpa"/><path class="iqadukbce"/></g>`,
		"fallback": "solar:hand-pills-bold-duotone",
	});
}

export default Component;
