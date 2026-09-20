import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjxp4acqq.css';
import '../../css/y/yofcqjmea.css';
import '../../css/j/jitf4bb3l.css';
import '../../css/j/j1sff6bjf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wjxp4acqq"/><path class="yofcqjmea"/><path class="jitf4bb3l"/><path clip-rule="evenodd" class="j1sff6bjf"/></g>`,
		"fallback": "streamline-color:backpack-flat",
	});
}

export default Component;
