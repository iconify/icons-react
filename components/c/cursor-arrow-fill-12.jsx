import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdwspjbge.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdwspjbge"/>`,
		"fallback": "garden:cursor-arrow-fill-12",
	});
}

export default Component;
