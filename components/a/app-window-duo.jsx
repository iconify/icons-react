import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xv5hb_5sx.css';
import '../../css/g/g136touho.css';
import '../../css/b/bht756bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xv5hb_5sx"/><path class="g136touho wm-a"/><path class="bht756bnp"/></g>`,
		"fallback": "withicons:app-window-duo",
	});
}

export default Component;
