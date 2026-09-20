import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg_q-fb_w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg_q-fb_w"/>`,
		"fallback": "memory:box-light-round-up-left-stipple-inner",
	});
}

export default Component;
