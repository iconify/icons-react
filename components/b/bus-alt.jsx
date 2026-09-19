import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvdj6abuo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvdj6abuo"/>`,
		"fallback": "fa-solid:bus-alt",
	});
}

export default Component;
