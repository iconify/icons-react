import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeby7rble.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeby7rble"/>`,
		"fallback": "fluent-mdl2:caret-solid",
	});
}

export default Component;
