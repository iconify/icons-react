import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojot2mb8p.css';
import '../../css/q/qdv2kgz8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojot2mb8p"/><path class="qdv2kgz8m"/></g>`,
		"fallback": "coolicons:chef-hat-bulk-round",
	});
}

export default Component;
