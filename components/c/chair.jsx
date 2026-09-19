import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f64yu1bcm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f64yu1bcm"/>`,
		"fallback": "fa7-solid:chair",
	});
}

export default Component;
