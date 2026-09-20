import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w27w7cbns.css';
import '../../css/u/u195gfizq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w27w7cbns"/><path class="u195gfizq"/></g>`,
		"fallback": "tdesign:anchor",
	});
}

export default Component;
