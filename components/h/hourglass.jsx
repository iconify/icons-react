import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy5ry8bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy5ry8bth"/>`,
		"fallback": "vadivam:hourglass",
	});
}

export default Component;
