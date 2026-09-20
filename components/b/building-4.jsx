import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrkgyhpda.css';
import '../../css/k/k82vtibwo.css';
import '../../css/j/jw7z1cb2x.css';
import '../../css/o/ouw7txhxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mrkgyhpda"/><path class="k82vtibwo"/><path class="jw7z1cb2x"/><path class="ouw7txhxk"/></g>`,
		"fallback": "tdesign:building-4",
	});
}

export default Component;
