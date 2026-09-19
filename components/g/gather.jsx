import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii40akb8x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii40akb8x"/>`,
		"fallback": "fluent-mdl2:gather",
	});
}

export default Component;
