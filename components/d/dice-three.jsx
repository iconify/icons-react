import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1vfllbcc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1vfllbcc"/>`,
		"fallback": "fa7-solid:dice-three",
	});
}

export default Component;
