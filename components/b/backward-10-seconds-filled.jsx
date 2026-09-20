import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijrvscckg.css';
import '../../css/f/fy--vuoiq.css';
import '../../css/u/ucfjmihqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ijrvscckg"/><path class="fy--vuoiq"/><path class="ucfjmihqh"/></g>`,
		"fallback": "reicon:backward-10-seconds-filled",
	});
}

export default Component;
