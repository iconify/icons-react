import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgr5pjbkj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgr5pjbkj"/>`,
		"fallback": "fa7-solid:h",
	});
}

export default Component;
