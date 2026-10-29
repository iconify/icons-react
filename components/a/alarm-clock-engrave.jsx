import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ffhs8jb2d.css';
import '../../css/o/oeli91cgn.css';
import '../../css/e/ev7y4dbmx.css';
import '../../css/l/lztux4j4y.css';
import '../../css/j/jj7r4xgjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ffhs8jb2d wm-k"/><path class="oeli91cgn wm-a"/><path class="ev7y4dbmx wm-shadow"/><path class="lztux4j4y wm-k"/><path class="jj7r4xgjd wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-engrave",
	});
}

export default Component;
