import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9x-w4s1u.css';
import '../../css/o/omx4q5uyw.css';
import '../../css/x/xqh2mbcfy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9x-w4s1u"/><path class="omx4q5uyw"/><path class="xqh2mbcfy"/>`,
		"fallback": "energy-icons:hydrogen-truck-20-bold",
	});
}

export default Component;
