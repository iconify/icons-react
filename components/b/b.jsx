import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohg5shbwh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohg5shbwh"/>`,
		"fallback": "fa7-solid:b",
	});
}

export default Component;
