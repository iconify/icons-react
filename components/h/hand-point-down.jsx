import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n55ad0htp.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n55ad0htp"/>`,
		"fallback": "fa-solid:hand-point-down",
	});
}

export default Component;
