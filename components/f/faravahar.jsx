import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfqtx2b7z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfqtx2b7z"/>`,
		"fallback": "pinhead:faravahar",
	});
}

export default Component;
