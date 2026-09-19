import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eph_-e7pj.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eph_-e7pj"/>`,
		"fallback": "fontisto:hourglass",
	});
}

export default Component;
