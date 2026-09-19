import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt-anzhev.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt-anzhev"/>`,
		"fallback": "fa7-solid:face-grin-tears",
	});
}

export default Component;
