import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daqra0bxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daqra0bxz"/>`,
		"fallback": "ion:arrow-graph-up-left",
	});
}

export default Component;
