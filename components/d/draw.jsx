import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og45dbcwi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og45dbcwi"/>`,
		"fallback": "carbon:draw",
	});
}

export default Component;
