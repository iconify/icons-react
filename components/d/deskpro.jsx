import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn4ui1qhl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn4ui1qhl"/>`,
		"fallback": "fa7-brands:deskpro",
	});
}

export default Component;
