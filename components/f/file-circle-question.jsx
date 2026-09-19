import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4c39fp6p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4c39fp6p"/>`,
		"fallback": "fa7-solid:file-circle-question",
	});
}

export default Component;
