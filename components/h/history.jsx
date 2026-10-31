import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jxlqhh4bz.css';
import '../../css/u/ucpud3b-x.css';
import '../../css/t/te0vz7bvw.css';
import '../../css/f/f0p7mosim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jxlqhh4bz"/><path class="ucpud3b-x wm-k"/><path class="te0vz7bvw wm-a"/><path class="f0p7mosim wm-deco"/></g>`,
		"fallback": "withicons-kawaii:history",
	});
}

export default Component;
