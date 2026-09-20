import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uewk6gbpn.css';
import '../../css/n/n6aw6y4ob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uewk6gbpn"/><path class="n6aw6y4ob"/></g>`,
		"fallback": "rivet-icons:image",
	});
}

export default Component;
