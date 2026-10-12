import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz3cfsc3k.css';
import '../../css/p/pkhcb0o2g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz3cfsc3k"/><path class="pkhcb0o2g"/>`,
		"fallback": "energy-icons:backpack-20-bold",
	});
}

export default Component;
