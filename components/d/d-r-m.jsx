import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gne62fbcj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gne62fbcj"/>`,
		"fallback": "fluent-mdl2:d-r-m",
	});
}

export default Component;
