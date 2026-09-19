import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6t7jkbzn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6t7jkbzn"/>`,
		"fallback": "fa7-solid:file-pdf",
	});
}

export default Component;
