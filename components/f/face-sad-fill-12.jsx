import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dewcu9rzc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dewcu9rzc"/>`,
		"fallback": "garden:face-sad-fill-12",
	});
}

export default Component;
