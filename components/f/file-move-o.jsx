import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i66nw380y.css';

const viewBox = {"width":1856,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i66nw380y"/>`,
		"fallback": "vs:file-move-o",
	});
}

export default Component;
