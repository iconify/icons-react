import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9o6lfw2o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9o6lfw2o"/>`,
		"fallback": "fa6-solid:align-center",
	});
}

export default Component;
