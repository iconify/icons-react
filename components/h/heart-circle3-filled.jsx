import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzp1m9bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzp1m9bdc"/>`,
		"fallback": "reicon:heart-circle3-filled",
	});
}

export default Component;
