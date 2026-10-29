import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c6f-2yfhg.css';
import '../../css/q/q2_klkbjc.css';
import '../../css/o/ozo108wpj.css';
import '../../css/e/ee6yh5bhz.css';
import '../../css/d/dyr3--wii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c6f-2yfhg wm-deco"/><path class="q2_klkbjc wm-deco"/><path class="ozo108wpj wm-deco"/><path class="ee6yh5bhz"/><path class="dyr3--wii"/></g>`,
		"fallback": "withicons:avatar-girl-blueprint",
	});
}

export default Component;
