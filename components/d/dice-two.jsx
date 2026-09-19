import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj5v0cbar.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj5v0cbar"/>`,
		"fallback": "fa7-solid:dice-two",
	});
}

export default Component;
