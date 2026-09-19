import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh5pykbek.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh5pykbek"/>`,
		"fallback": "fa-solid:crown",
	});
}

export default Component;
