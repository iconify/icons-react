import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pokp8ab5s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pokp8ab5s"/>`,
		"fallback": "fa7-solid:arrows-up-to-line",
	});
}

export default Component;
