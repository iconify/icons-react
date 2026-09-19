import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_9g-3b4q.css';
import '../../css/y/y-o-86bhb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_9g-3b4q"/><path class="y-o-86bhb"/></g>`,
		"fallback": "glyphs:arrow-u-turn-duo",
	});
}

export default Component;
