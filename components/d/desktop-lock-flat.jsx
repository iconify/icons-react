import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydzvecrzs.css';
import '../../css/o/ogwjrk59f.css';
import '../../css/r/r_fujz1eg.css';
import '../../css/c/ckjtr41lg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ydzvecrzs"/><path clip-rule="evenodd" class="ogwjrk59f"/><path clip-rule="evenodd" class="r_fujz1eg"/><path class="ckjtr41lg"/></g>`,
		"fallback": "streamline-plump-color:desktop-lock-flat",
	});
}

export default Component;
