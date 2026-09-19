import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgfg79rry.css';
import '../../css/y/y6gza9ttc.css';

const viewBox = {"width":25,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lgfg79rry"/><path class="y6gza9ttc"/></g>`,
		"fallback": "et:globe",
	});
}

export default Component;
