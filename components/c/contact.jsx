import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4q4dk35m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4q4dk35m"/>`,
		"fallback": "fluent-mdl2:contact",
	});
}

export default Component;
