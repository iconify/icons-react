import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt46l7bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt46l7bxj"/>`,
		"fallback": "typcn:flash",
	});
}

export default Component;
