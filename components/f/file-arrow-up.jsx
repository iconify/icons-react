import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz9572bcj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz9572bcj"/>`,
		"fallback": "fa7-solid:file-arrow-up",
	});
}

export default Component;
