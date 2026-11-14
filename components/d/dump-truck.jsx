import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l2zme6t-z.css';
import '../../css/u/u8lz7gbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l2zme6t-z"/><path class="u8lz7gbwk"/></g>`,
		"fallback": "hugeicons:dump-truck",
	});
}

export default Component;
