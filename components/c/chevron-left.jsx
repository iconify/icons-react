import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-9m4gbpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-9m4gbpz"/>`,
		"fallback": "cil:chevron-left",
	});
}

export default Component;
