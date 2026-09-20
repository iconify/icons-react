import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x90gzqgsu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x90gzqgsu"/>`,
		"fallback": "lsicon:gather-outline",
	});
}

export default Component;
