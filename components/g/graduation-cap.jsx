import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_83agb0l.css';
import '../../css/c/c2x4ulbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_83agb0l"/><path class="c2x4ulbsl"/></g>`,
		"fallback": "hugeicons:graduation-cap",
	});
}

export default Component;
