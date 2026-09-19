import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db36yjbrz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db36yjbrz"/>`,
		"fallback": "fa7-solid:cubes-stacked",
	});
}

export default Component;
