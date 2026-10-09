import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0dtlbqb.css';
import '../../css/k/ko9a2zbln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0dtlbqb"/><path class="ko9a2zbln"/>`,
		"fallback": "energy-icons:electric-truck-20",
	});
}

export default Component;
