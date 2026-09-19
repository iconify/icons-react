import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sttvf-bvs.css';
import '../../css/y/y7kyjwr3l.css';
import '../../css/j/j1-miibsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sttvf-bvs"/><path clip-rule="evenodd" class="y7kyjwr3l"/><path class="j1-miibsd"/></g>`,
		"fallback": "gg:display-spacing",
	});
}

export default Component;
