import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze0oxb4me.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze0oxb4me"/>`,
		"fallback": "vs:4-square",
	});
}

export default Component;
