import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu0yxyb4q.css';

const viewBox = {"width":360,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu0yxyb4q"/>`,
		"fallback": "file-icons:imgbot",
	});
}

export default Component;
