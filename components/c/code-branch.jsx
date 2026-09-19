import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8nj21w8a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8nj21w8a"/>`,
		"fallback": "fa7-solid:code-branch",
	});
}

export default Component;
