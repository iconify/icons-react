import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m80yhwbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m80yhwbvj"/>`,
		"fallback": "circum:file-off",
	});
}

export default Component;
