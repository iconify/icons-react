import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frqcf-b7d.css';
import '../../css/p/pzcucr26s.css';
import '../../css/w/wv2stibew.css';
import '../../css/o/oweceybem.css';
import '../../css/d/d-w5pwneq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="frqcf-b7d"/><path clip-rule="evenodd" class="pzcucr26s"/><path class="wv2stibew"/><path clip-rule="evenodd" class="oweceybem"/><path clip-rule="evenodd" class="d-w5pwneq"/></g>`,
		"fallback": "streamline-sharp-color:ai-vehicle-robot-1-flat",
	});
}

export default Component;
