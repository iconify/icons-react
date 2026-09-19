import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unyesglzz.css';
import '../../css/o/o53li4bdw.css';
import '../../css/m/mvgov77cq.css';
import '../../css/w/ww94vccvo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unyesglzz"/><path clip-rule="evenodd" class="o53li4bdw"/><path class="mvgov77cq"/><path clip-rule="evenodd" class="ww94vccvo"/></g>`,
		"fallback": "glyphs:door-open-1-outline",
	});
}

export default Component;
