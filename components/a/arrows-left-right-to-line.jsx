import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io8cndj1g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io8cndj1g"/>`,
		"fallback": "fa7-solid:arrows-left-right-to-line",
	});
}

export default Component;
