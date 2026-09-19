import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1gmc4l8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1gmc4l8s"/>`,
		"fallback": "griddy-icons:check-circle-filled",
	});
}

export default Component;
