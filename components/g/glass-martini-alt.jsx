import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab10wbczk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab10wbczk"/>`,
		"fallback": "fa7-solid:glass-martini-alt",
	});
}

export default Component;
