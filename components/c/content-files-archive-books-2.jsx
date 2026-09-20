import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtkzo6vvu.css';
import '../../css/w/w9a7ojbxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtkzo6vvu"/><path class="w9a7ojbxe"/>`,
		"fallback": "streamline-pixel:content-files-archive-books-2",
	});
}

export default Component;
