import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efihxg8fx.css';
import '../../css/d/dr6iz3bit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efihxg8fx"/><path class="dr6iz3bit"/>`,
		"fallback": "garden:indent-decrease-fill-16",
	});
}

export default Component;
