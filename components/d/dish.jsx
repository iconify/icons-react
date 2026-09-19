import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4h7vm6nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4h7vm6nh"/>`,
		"fallback": "bxs:dish",
	});
}

export default Component;
