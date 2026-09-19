import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8ey5rnuq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8ey5rnuq"/>`,
		"fallback": "carbon:boot-volume",
	});
}

export default Component;
