import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j88efmxpl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j88efmxpl"/>`,
		"fallback": "fluent-mdl2:image-in-a-r",
	});
}

export default Component;
