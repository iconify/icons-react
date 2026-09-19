import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vex75ssgm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vex75ssgm"/>`,
		"fallback": "fa7-solid:history",
	});
}

export default Component;
