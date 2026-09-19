import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev2g9p6tf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev2g9p6tf"/>`,
		"fallback": "fa7-solid:capricorn",
	});
}

export default Component;
