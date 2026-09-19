import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqfe31b7v.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqfe31b7v"/>`,
		"fallback": "fa6-solid:arrow-down-9-1",
	});
}

export default Component;
