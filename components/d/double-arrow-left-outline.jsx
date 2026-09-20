import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knz6qdp8j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knz6qdp8j"/>`,
		"fallback": "lsicon:double-arrow-left-outline",
	});
}

export default Component;
