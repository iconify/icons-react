import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fxgggdy7l.css';
import '../../css/d/d3948uyxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fxgggdy7l"/><path class="d3948uyxw"/></g>`,
		"fallback": "hugeicons:call-end-02",
	});
}

export default Component;
