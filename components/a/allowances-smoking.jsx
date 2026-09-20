import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jssa96bzq.css';
import '../../css/m/myz31-4ed.css';
import '../../css/x/xpblcvb4q.css';
import '../../css/x/xynkp0bnd.css';
import '../../css/d/dwo4d5bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jssa96bzq"/><path class="myz31-4ed"/><path class="xpblcvb4q"/><path class="xynkp0bnd"/><path class="dwo4d5bgk"/></g>`,
		"fallback": "streamline-ultimate-color:allowances-smoking",
	});
}

export default Component;
