import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uublusndv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uublusndv"/>`,
		"fallback": "fluent-mdl2:edit-solid-12",
	});
}

export default Component;
