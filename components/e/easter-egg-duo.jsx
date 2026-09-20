import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/c/c5p-m7byx.css';
import '../../css/o/obbn_ibfg.css';
import '../../css/s/ssh8gtb2h.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="c5p-m7byx"/><path class="obbn_ibfg"/><path class="ssh8gtb2h"/></g>`,
		"fallback": "streamline-stickies-color:easter-egg-duo",
	});
}

export default Component;
