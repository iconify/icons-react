import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1rc-wnvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1rc-wnvx"/>`,
		"fallback": "streamline:add-square",
	});
}

export default Component;
