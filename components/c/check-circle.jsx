import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myib6wbeg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myib6wbeg"/>`,
		"fallback": "fa7-solid:check-circle",
	});
}

export default Component;
