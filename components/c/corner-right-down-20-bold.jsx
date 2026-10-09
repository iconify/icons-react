import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tex_f1bsd.css';
import '../../css/q/q4u-icn5d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tex_f1bsd"/><path class="q4u-icn5d"/>`,
		"fallback": "energy-icons:corner-right-down-20-bold",
	});
}

export default Component;
