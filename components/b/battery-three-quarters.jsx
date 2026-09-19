import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2w1ue3kd.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2w1ue3kd"/>`,
		"fallback": "fa:battery-three-quarters",
	});
}

export default Component;
