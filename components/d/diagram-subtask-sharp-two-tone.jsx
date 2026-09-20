import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hnd7v4yjn.css';
import '../../css/x/x8yn27m5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hnd7v4yjn"/><path class="x8yn27m5p"/></g>`,
		"fallback": "keyline-icons:diagram-subtask-sharp-two-tone",
	});
}

export default Component;
