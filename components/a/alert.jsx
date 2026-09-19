import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m44z8bb6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m44z8bb6s"/>`,
		"fallback": "bytesize:alert",
	});
}

export default Component;
