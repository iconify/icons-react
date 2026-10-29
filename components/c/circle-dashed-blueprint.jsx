import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j_mifyvle.css';
import '../../css/d/d055-mijy.css';
import '../../css/o/o-fwz22nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j_mifyvle wm-deco"/><path class="d055-mijy wm-deco"/><path class="o-fwz22nq"/></g>`,
		"fallback": "withicons:circle-dashed-blueprint",
	});
}

export default Component;
