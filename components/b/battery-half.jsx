import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gstxg1kyb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gstxg1kyb"/>`,
		"fallback": "fa-solid:battery-half",
	});
}

export default Component;
