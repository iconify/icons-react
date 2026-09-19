import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfswnh5af.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfswnh5af"/>`,
		"fallback": "ps:arto",
	});
}

export default Component;
