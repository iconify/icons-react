import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8e65yb1h.css';
import '../../css/g/gjf3z3b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y8e65yb1h"/><path class="gjf3z3b0z"/></g>`,
		"fallback": "hugeicons:file-plus-corner",
	});
}

export default Component;
