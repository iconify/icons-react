import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alds_x8qj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alds_x8qj"/>`,
		"fallback": "fluent-mdl2:check-list",
	});
}

export default Component;
