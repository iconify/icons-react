import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo646nz8a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo646nz8a"/>`,
		"fallback": "fa7-solid:hotdog",
	});
}

export default Component;
