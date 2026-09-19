import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgix2db9b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgix2db9b"/>`,
		"fallback": "fa7-solid:arrows-down-to-people",
	});
}

export default Component;
