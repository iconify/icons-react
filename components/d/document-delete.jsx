import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxg_-4wtl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxg_-4wtl"/>`,
		"fallback": "ep:document-delete",
	});
}

export default Component;
