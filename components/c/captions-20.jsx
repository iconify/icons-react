import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4l8cxbpg.css';
import '../../css/h/hxs084q0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4l8cxbpg"/><path class="hxs084q0t"/>`,
		"fallback": "energy-icons:captions-20",
	});
}

export default Component;
