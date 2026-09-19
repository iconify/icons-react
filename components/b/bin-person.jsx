import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kebdum4nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kebdum4nf"/>`,
		"fallback": "guidance:bin-person",
	});
}

export default Component;
