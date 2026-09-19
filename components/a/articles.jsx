import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gon5h6bpa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gon5h6bpa"/>`,
		"fallback": "fluent-mdl2:articles",
	});
}

export default Component;
