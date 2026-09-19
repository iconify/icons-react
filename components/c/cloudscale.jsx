import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p20be8wjy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p20be8wjy"/>`,
		"fallback": "fa7-brands:cloudscale",
	});
}

export default Component;
