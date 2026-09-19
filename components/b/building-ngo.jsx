import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpnh1mizs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpnh1mizs"/>`,
		"fallback": "fa7-solid:building-ngo",
	});
}

export default Component;
