import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvp9ersfw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvp9ersfw"/>`,
		"fallback": "fa6-solid:house-fire",
	});
}

export default Component;
