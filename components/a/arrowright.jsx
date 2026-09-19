import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcffhsb6n.css';

const viewBox = {"width":690,"height":718};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcffhsb6n"/>`,
		"fallback": "ls:arrowright",
	});
}

export default Component;
