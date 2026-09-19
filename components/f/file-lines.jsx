import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7wfuwb2h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7wfuwb2h"/>`,
		"fallback": "fa7-solid:file-lines",
	});
}

export default Component;
