import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xle_1ccvl.css';
import '../../css/m/ma20n0b8n.css';
import '../../css/r/rb4241btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="xle_1ccvl"/><path class="ma20n0b8n"/><path class="rb4241btd"/></g>`,
		"fallback": "reicon:headphones5",
	});
}

export default Component;
