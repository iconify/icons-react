import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h23-ryoeq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h23-ryoeq"/>`,
		"fallback": "fa7-solid:file-arrow-down",
	});
}

export default Component;
