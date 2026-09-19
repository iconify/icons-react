import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3z1dfb6i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3z1dfb6i"/>`,
		"fallback": "fluent-mdl2:export",
	});
}

export default Component;
