import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1wkb86ze.css';
import '../../css/u/u6d9mwu4u.css';
import '../../css/y/y18icnb3k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1wkb86ze"/><path class="u6d9mwu4u"/><path class="y18icnb3k"/>`,
		"fallback": "energy-icons:dial-indicator-20",
	});
}

export default Component;
