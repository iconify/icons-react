import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meoj66rlz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meoj66rlz"/>`,
		"fallback": "subway:call-1",
	});
}

export default Component;
