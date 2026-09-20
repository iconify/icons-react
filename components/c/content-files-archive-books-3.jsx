import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7r7x_-5t.css';
import '../../css/d/d1yg4gbal.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7r7x_-5t"/><path class="d1yg4gbal"/>`,
		"fallback": "streamline-pixel:content-files-archive-books-3",
	});
}

export default Component;
