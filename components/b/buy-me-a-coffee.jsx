import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdy8dbnaz.css';
import '../../css/c/cdagp1b1e.css';
import '../../css/j/jhg4910de.css';
import '../../css/y/y2i66nb2u.css';
import '../../css/v/vmw8_7b1h.css';

const viewBox = {"width":884,"height":1279};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hdy8dbnaz"/><path class="cdagp1b1e"/><path class="jhg4910de"/><path class="y2i66nb2u"/><path class="vmw8_7b1h"/></g>`,
		"fallback": "thesvg-color:buy-me-a-coffee",
	});
}

export default Component;
