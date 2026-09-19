import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2ps0c8lj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2ps0c8lj"/>`,
		"fallback": "fa7-brands:deploydog",
	});
}

export default Component;
