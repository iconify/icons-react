import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq5kvfbtr.css';
import '../../css/w/wcspu5b7n.css';
import '../../css/u/uz70hsbcy.css';
import '../../css/o/ofxeqkbsk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aq5kvfbtr"/><path class="wcspu5b7n"/><path class="uz70hsbcy"/><path class="ofxeqkbsk"/></g>`,
		"fallback": "glyphs:coin-duo",
	});
}

export default Component;
