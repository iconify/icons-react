import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/af59316gp.css';
import '../../css/l/l4dm4e01b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="af59316gp"/><path class="l4dm4e01b"/></g>`,
		"fallback": "reicon:drop-duotone",
	});
}

export default Component;
