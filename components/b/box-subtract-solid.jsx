import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8l66bc6x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8l66bc6x"/>`,
		"fallback": "fluent-mdl2:box-subtract-solid",
	});
}

export default Component;
