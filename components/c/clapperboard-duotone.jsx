import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jszsnh1_b.css';
import '../../css/o/ol6zbodjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jszsnh1_b"/><path class="ol6zbodjb"/></g>`,
		"fallback": "reicon:clapperboard-duotone",
	});
}

export default Component;
