import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g96d17pey.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g96d17pey"/>`,
		"fallback": "fa7-solid:hammer",
	});
}

export default Component;
