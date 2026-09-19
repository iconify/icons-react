import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icxipw0ri.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icxipw0ri"/>`,
		"fallback": "fa7-solid:atlas",
	});
}

export default Component;
