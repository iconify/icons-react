import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq51h4bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq51h4bqm"/>`,
		"fallback": "coolicons:camera-sparkle-round",
	});
}

export default Component;
