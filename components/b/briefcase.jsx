import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avl5xcjog.css';
import '../../css/r/rp0lyypng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avl5xcjog"/><path clip-rule="evenodd" class="rp0lyypng"/></g>`,
		"fallback": "gg:briefcase",
	});
}

export default Component;
