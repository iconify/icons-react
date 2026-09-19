import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqao4p0gj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqao4p0gj"/>`,
		"fallback": "devicon-plain:dynamodb",
	});
}

export default Component;
