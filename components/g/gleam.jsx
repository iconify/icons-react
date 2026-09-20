import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqnxzwb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqnxzwb7h"/>`,
		"fallback": "material-icon-theme:gleam",
	});
}

export default Component;
