import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhxk1hsjr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zhxk1hsjr"/>`,
		"fallback": "streamline:cards-solid",
	});
}

export default Component;
