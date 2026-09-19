import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzdvk5bov.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzdvk5bov"/>`,
		"fallback": "fa6-solid:building",
	});
}

export default Component;
