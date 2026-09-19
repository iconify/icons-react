import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvj5u7dat.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvj5u7dat"/>`,
		"fallback": "fa7-brands:git",
	});
}

export default Component;
