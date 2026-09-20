import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhm8-4bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhm8-4bma"/>`,
		"fallback": "typcn:infinity",
	});
}

export default Component;
