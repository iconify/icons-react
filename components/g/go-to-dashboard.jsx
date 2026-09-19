import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixa7405ay.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixa7405ay"/>`,
		"fallback": "fluent-mdl2:go-to-dashboard",
	});
}

export default Component;
