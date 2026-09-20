import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7wmwym2y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7wmwym2y"/>`,
		"fallback": "streamline-color:arrow-down-2",
	});
}

export default Component;
