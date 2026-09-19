import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-vvq8bcj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-vvq8bcj"/>`,
		"fallback": "fa7-regular:chess-queen",
	});
}

export default Component;
