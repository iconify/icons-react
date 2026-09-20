import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdnenkl9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdnenkl9n"/>`,
		"fallback": "la:file-audio",
	});
}

export default Component;
