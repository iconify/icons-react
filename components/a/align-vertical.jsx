import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkuh07b0c.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkuh07b0c"/>`,
		"fallback": "system-uicons:align-vertical",
	});
}

export default Component;
