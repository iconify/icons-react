import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvh7gqq8g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvh7gqq8g"/>`,
		"fallback": "fa7-brands:css",
	});
}

export default Component;
