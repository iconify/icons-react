import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvcqaccok.css';
import '../../css/j/jhhyfu85f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvcqaccok"/><path class="jhhyfu85f"/>`,
		"fallback": "streamline-pixel:content-files-books-2",
	});
}

export default Component;
