import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cytyfkvmo.css';
import '../../css/y/y2gcv4obb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cytyfkvmo"/><path class="y2gcv4obb"/>`,
		"fallback": "garden:direction-ltr-fill-12",
	});
}

export default Component;
