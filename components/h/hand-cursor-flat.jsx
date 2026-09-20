import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e142afbbv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e142afbbv"/>`,
		"fallback": "streamline-color:hand-cursor-flat",
	});
}

export default Component;
