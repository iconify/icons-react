import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psb0yl70r.css';
import '../../css/n/nfl2fnb5s.css';
import '../../css/g/galrujb0s.css';
import '../../css/j/jxeo80bpu.css';
import '../../css/r/rbdoyy3-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="psb0yl70r"/><path class="nfl2fnb5s"/><path class="galrujb0s"/><path class="jxeo80bpu"/><path class="rbdoyy3-m"/></g>`,
		"fallback": "streamline-cyber-color:computer-chips-32-bit",
	});
}

export default Component;
