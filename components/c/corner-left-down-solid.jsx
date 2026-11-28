import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9q7kbbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9q7kbbig"/>`,
		"fallback": "iconaut:corner-left-down-solid",
	});
}

export default Component;
