import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xltax3bxw.css';
import '../../css/j/j3l-vfqkm.css';
import '../../css/h/hmp16njeg.css';
import '../../css/f/f78e21b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xltax3bxw"/><path class="j3l-vfqkm wm-s"/><path class="hmp16njeg"/><path class="f78e21b0t wm-a"/></g>`,
		"fallback": "withicons:clock-alert-duo",
	});
}

export default Component;
