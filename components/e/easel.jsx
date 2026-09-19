import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns5x1qb3u.css';
import '../../css/c/c-o8u9blp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ns5x1qb3u"/><path class="c-o8u9blp"/>`,
		"fallback": "ion:easel",
	});
}

export default Component;
