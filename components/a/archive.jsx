import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea2px6x9s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea2px6x9s"/>`,
		"fallback": "system-uicons:archive",
	});
}

export default Component;
