import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8be29jfg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8be29jfg"/>`,
		"fallback": "fa7-solid:chalkboard-teacher",
	});
}

export default Component;
