import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzh9jbtll.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzh9jbtll"/>`,
		"fallback": "fa7-solid:file-audio",
	});
}

export default Component;
