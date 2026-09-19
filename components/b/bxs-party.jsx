import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7auwxbuh.css';
import '../../css/b/bw3v4wb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7auwxbuh"/><path class="bw3v4wb3i"/>`,
		"fallback": "bx:bxs-party",
	});
}

export default Component;
