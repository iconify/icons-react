import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iokcg5b0r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iokcg5b0r"/>`,
		"fallback": "fa7-regular:clone",
	});
}

export default Component;
