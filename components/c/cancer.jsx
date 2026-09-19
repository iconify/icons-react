import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw5k4ibut.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw5k4ibut"/>`,
		"fallback": "fa7-solid:cancer",
	});
}

export default Component;
