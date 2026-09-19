import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw9d_bb_w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw9d_bb_w"/>`,
		"fallback": "fa7-solid:expand-alt",
	});
}

export default Component;
