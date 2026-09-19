import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m058yjboy.css';
import '../../css/l/lpf31_i2c.css';
import '../../css/e/e7ui7sb9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m058yjboy"/><path class="lpf31_i2c"/><path clip-rule="evenodd" class="e7ui7sb9w"/></g>`,
		"fallback": "healthicons:death-alt",
	});
}

export default Component;
