import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh40rfbur.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh40rfbur"/>`,
		"fallback": "fa7-solid:grip-horizontal",
	});
}

export default Component;
