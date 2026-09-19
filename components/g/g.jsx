import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r25jusb9y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r25jusb9y"/>`,
		"fallback": "fa7-solid:g",
	});
}

export default Component;
