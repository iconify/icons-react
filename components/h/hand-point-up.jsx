import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwx5-1byy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwx5-1byy"/>`,
		"fallback": "fa7-solid:hand-point-up",
	});
}

export default Component;
