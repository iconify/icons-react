import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuihi2b7a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuihi2b7a"/>`,
		"fallback": "la:business-time-solid",
	});
}

export default Component;
