import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9xe9obue.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9xe9obue"/>`,
		"fallback": "fa6-solid:greater-than",
	});
}

export default Component;
