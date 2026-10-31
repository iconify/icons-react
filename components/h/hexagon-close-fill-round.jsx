import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzv3ysyde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzv3ysyde"/>`,
		"fallback": "coolicons:hexagon-close-fill-round",
	});
}

export default Component;
