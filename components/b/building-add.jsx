import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/al1vx9b6x.css';
import '../../css/z/z_beebviz.css';
import '../../css/v/vs2te2huy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="al1vx9b6x"/><path class="z_beebviz"/><path class="vs2te2huy"/></g>`,
		"fallback": "bi:building-add",
	});
}

export default Component;
