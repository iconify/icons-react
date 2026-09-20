import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b48va0b6f.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b48va0b6f"/>`,
		"fallback": "system-uicons:external",
	});
}

export default Component;
