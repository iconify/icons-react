import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbfeluyew.css';
import '../../css/y/yl4igzk9b.css';
import '../../css/g/g5m5enmwo.css';
import '../../css/l/lpveefb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbfeluyew"/><path class="yl4igzk9b"/><path class="g5m5enmwo"/><path class="lpveefb1h"/></g>`,
		"fallback": "streamline-cyber-color:day-storm",
	});
}

export default Component;
