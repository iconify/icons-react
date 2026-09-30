import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2m-mqbyd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2m-mqbyd"/>`,
		"fallback": "garden:at-stroke-12",
	});
}

export default Component;
