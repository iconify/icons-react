import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcxs3hbaw.css';
import '../../css/s/sq3z-9xqp.css';
import '../../css/y/y-e0_cb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcxs3hbaw"/><path class="sq3z-9xqp"/><path class="y-e0_cb5m"/>`,
		"fallback": "ion:closed-captioning",
	});
}

export default Component;
