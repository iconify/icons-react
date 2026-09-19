import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0i4ih50q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0i4ih50q"/>`,
		"fallback": "fa7-solid:clipboard-question",
	});
}

export default Component;
