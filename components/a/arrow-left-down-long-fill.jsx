import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuabpnbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuabpnbfa"/>`,
		"fallback": "ri:arrow-left-down-long-fill",
	});
}

export default Component;
