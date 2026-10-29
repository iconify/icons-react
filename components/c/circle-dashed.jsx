import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztj1zhmqk.css';
import '../../css/t/tlg0i3byt.css';
import '../../css/o/oraswvkzg.css';
import '../../css/v/v420qz8oi.css';
import '../../css/y/ycbqh8owi.css';
import '../../css/o/oq279achg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-shadow ztj1zhmqk"/><path class="tlg0i3byt wm-k"/><path class="oraswvkzg wm-k"/><path class="v420qz8oi wm-k"/><path class="wm-k ycbqh8owi"/><path class="oq279achg wm-k"/></g>`,
		"fallback": "withicons-gothic:circle-dashed",
	});
}

export default Component;
