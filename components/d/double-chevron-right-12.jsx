import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-8om301c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-8om301c"/>`,
		"fallback": "fluent-mdl2:double-chevron-right-12",
	});
}

export default Component;
