import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qee830rbs.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/q/qwp7vcb_l.css';
import '../../css/b/b4w4vubmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qee830rbs"/><path class="u5h8llb9a"/><path class="qwp7vcb_l"/><path class="b4w4vubmq"/></g>`,
		"fallback": "andrsrxn:globe-sparkle",
	});
}

export default Component;
