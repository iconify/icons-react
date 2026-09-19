import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfnu3g3ub.css';
import '../../css/y/yc8qmqb5v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xfnu3g3ub"/><path class="yc8qmqb5v"/></g>`,
		"fallback": "glyphs:house-damage-outline",
	});
}

export default Component;
