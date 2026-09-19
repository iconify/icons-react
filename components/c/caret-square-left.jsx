import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ury1xy_5q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ury1xy_5q"/>`,
		"fallback": "fa7-solid:caret-square-left",
	});
}

export default Component;
