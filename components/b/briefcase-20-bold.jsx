import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_8jrujkz.css';
import '../../css/c/cqfb17bhj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_8jrujkz"/><path class="cqfb17bhj"/>`,
		"fallback": "energy-icons:briefcase-20-bold",
	});
}

export default Component;
