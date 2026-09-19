import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b32gx1bhh.css';
import '../../css/g/g2c0nzb8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b32gx1bhh"/><path clip-rule="evenodd" class="g2c0nzb8c"/></g>`,
		"fallback": "healthicons:award-ribbon",
	});
}

export default Component;
