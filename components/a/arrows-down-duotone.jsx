import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nasgaccwo.css';
import '../../css/b/b399t_cff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nasgaccwo"/><path clip-rule="evenodd" class="b399t_cff"/></g>`,
		"fallback": "reicon:arrows-down-duotone",
	});
}

export default Component;
