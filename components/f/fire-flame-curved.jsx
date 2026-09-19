import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6_3jxbvf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6_3jxbvf"/>`,
		"fallback": "fa7-solid:fire-flame-curved",
	});
}

export default Component;
