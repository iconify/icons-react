import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqkq0jbve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqkq0jbve"/>`,
		"fallback": "fa7-brands:artstation",
	});
}

export default Component;
