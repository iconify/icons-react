import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrvfdp9vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrvfdp9vf"/>`,
		"fallback": "noviair-light:circle-3",
	});
}

export default Component;
