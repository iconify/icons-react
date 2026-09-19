import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_y_-wofq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_y_-wofq"/>`,
		"fallback": "ion:chevron-up-circle-sharp",
	});
}

export default Component;
