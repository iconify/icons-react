import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-seu5b6t.css';
import '../../css/s/s28dj_o6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l-seu5b6t"/><path class="s28dj_o6w"/></g>`,
		"fallback": "reicon:briefcase2-duotone",
	});
}

export default Component;
