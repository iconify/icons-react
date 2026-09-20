import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmf9j0bku.css';
import '../../css/o/oat20jbpp.css';
import '../../css/y/y_9bxsb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmf9j0bku"/><path class="oat20jbpp"/><path class="y_9bxsb7l"/></g>`,
		"fallback": "reicon:donut2-duotone",
	});
}

export default Component;
