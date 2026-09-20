import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/renxt_8va.css';
import '../../css/n/n_zv-y8ay.css';
import '../../css/v/vu-wgdbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="renxt_8va"/><path class="n_zv-y8ay"/><path class="vu-wgdbxl"/></g>`,
		"fallback": "pixelarticons:ai-settings-2",
	});
}

export default Component;
