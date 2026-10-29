import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/veij98b8c.css';
import '../../css/j/j7oh25y3z.css';
import '../../css/x/x-suqcc-l.css';
import '../../css/s/sg87_pbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="veij98b8c"/><path class="j7oh25y3z wm-a"/><path class="wm-k x-suqcc-l"/><path class="sg87_pbju wm-a"/></g>`,
		"fallback": "withicons:drumstick-sketch",
	});
}

export default Component;
