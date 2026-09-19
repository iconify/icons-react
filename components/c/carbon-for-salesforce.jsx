import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3jsy69az.css';
import '../../css/h/h5js46x2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3jsy69az"/><path class="h5js46x2e"/>`,
		"fallback": "carbon:carbon-for-salesforce",
	});
}

export default Component;
