import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi__8e8vn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi__8e8vn"/>`,
		"fallback": "system-uicons:close",
	});
}

export default Component;
