import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brije6bml.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brije6bml"/>`,
		"fallback": "fa6-solid:bus",
	});
}

export default Component;
