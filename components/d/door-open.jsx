import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caj3s8vnn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caj3s8vnn"/>`,
		"fallback": "fa7-solid:door-open",
	});
}

export default Component;
