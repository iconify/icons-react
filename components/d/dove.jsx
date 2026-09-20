import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bn-3b4l.css';
import '../../css/v/vbnb4dskg.css';
import '../../css/t/t297pwbyd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tbjbnw6jh.css';
import '../../css/f/fotxbu58s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l0bn-3b4l"><path class="vbnb4dskg"/><path class="t297pwbyd"/></g><g class="ij2x_72vy"><path class="tbjbnw6jh"/><path class="fotxbu58s"/></g>`,
		"fallback": "openmoji:dove",
	});
}

export default Component;
