import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrc1gib8z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrc1gib8z"/>`,
		"fallback": "ep:files",
	});
}

export default Component;
