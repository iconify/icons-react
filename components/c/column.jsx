import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9mx3vn6r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9mx3vn6r"/>`,
		"fallback": "fluent-mdl2:column",
	});
}

export default Component;
