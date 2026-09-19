import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b433rwbjt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b433rwbjt"/>`,
		"fallback": "fa7-solid:dragon",
	});
}

export default Component;
