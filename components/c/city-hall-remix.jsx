import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-q_4i3gp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-q_4i3gp"/>`,
		"fallback": "streamline:city-hall-remix",
	});
}

export default Component;
