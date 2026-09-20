import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y58fgyb3l.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/r/rr87-gb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y58fgyb3l"/><path class="p53xcyb3q"/><path class="rr87-gb1e"/></g>`,
		"fallback": "keyline-icons:chart-bar-big-sharp-two-tone",
	});
}

export default Component;
