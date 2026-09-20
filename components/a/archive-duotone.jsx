import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t1s5b0bfu.css';
import '../../css/i/iwyb8yb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t1s5b0bfu"/><path class="iwyb8yb8z"/></g>`,
		"fallback": "reicon:archive-duotone",
	});
}

export default Component;
