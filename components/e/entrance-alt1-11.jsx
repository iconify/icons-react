import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox9j2bgb.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox9j2bgb"/>`,
		"fallback": "maki:entrance-alt1-11",
	});
}

export default Component;
