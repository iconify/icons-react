import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1cf7r2zc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1cf7r2zc"/>`,
		"fallback": "glyphs:calendar-outline",
	});
}

export default Component;
