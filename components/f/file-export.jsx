import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfa6qkixq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfa6qkixq"/>`,
		"fallback": "fa7-solid:file-export",
	});
}

export default Component;
