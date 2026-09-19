import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz3672b7k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz3672b7k"/>`,
		"fallback": "fa7-solid:comment-nodes",
	});
}

export default Component;
