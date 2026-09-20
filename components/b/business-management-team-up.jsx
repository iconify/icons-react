import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e1hupvzta.css';
import '../../css/o/ovydmbcol.css';
import '../../css/q/q53q1l0-b.css';
import '../../css/b/b06685bik.css';
import '../../css/x/xvufhjbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e1hupvzta"/><path class="ovydmbcol"/><path class="q53q1l0-b"/><path class="b06685bik"/><path class="xvufhjbqh"/></g>`,
		"fallback": "streamline-freehand-color:business-management-team-up",
	});
}

export default Component;
