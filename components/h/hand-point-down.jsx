import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkk764efu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkk764efu"/>`,
		"fallback": "fa7-solid:hand-point-down",
	});
}

export default Component;
