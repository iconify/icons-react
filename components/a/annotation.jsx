import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juxkr3bxf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juxkr3bxf"/>`,
		"fallback": "dinkie-icons:annotation",
	});
}

export default Component;
