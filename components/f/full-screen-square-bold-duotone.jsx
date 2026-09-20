import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/ze0it41ch.css';
import '../../css/d/dlhjmks0h.css';
import '../../css/m/mn5pwmbkh.css';
import '../../css/f/f3i-0ybst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ze0it41ch"/><path class="dlhjmks0h"/><path class="mn5pwmbkh"/><path class="f3i-0ybst"/></g>`,
		"fallback": "solar:full-screen-square-bold-duotone",
	});
}

export default Component;
