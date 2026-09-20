import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvu1pxbbe.css';
import '../../css/e/eg88gnbzy.css';
import '../../css/g/g0bsq3byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvu1pxbbe"/><path class="eg88gnbzy"/><path class="g0bsq3byr"/></g>`,
		"fallback": "reicon:computer",
	});
}

export default Component;
