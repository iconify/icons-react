import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ptaqkfbbe.css';
import '../../css/u/uv75rnbeo.css';
import '../../css/e/eg346y1on.css';
import '../../css/j/j0zs1mbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ptaqkfbbe"/><path class="uv75rnbeo"/><path class="eg346y1on"/><path class="j0zs1mbsn"/></g>`,
		"fallback": "hugeicons:brain-circuit",
	});
}

export default Component;
