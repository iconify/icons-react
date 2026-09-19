import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0__vbcts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0__vbcts"/>`,
		"fallback": "hugeicons:file-01",
	});
}

export default Component;
