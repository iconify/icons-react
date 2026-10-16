import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2zvukrgy.css';
import '../../css/n/nxke65bzq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2zvukrgy"/><path class="nxke65bzq"/>`,
		"fallback": "energy-icons:glacier-20-bold",
	});
}

export default Component;
