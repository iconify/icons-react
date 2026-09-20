import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu870r4lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu870r4lf"/>`,
		"fallback": "ri:information-2-fill",
	});
}

export default Component;
