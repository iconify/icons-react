import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr2ao-b5d.css';
import '../../css/q/quh-_jkrk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr2ao-b5d"/><path class="quh-_jkrk"/>`,
		"fallback": "energy-icons:bell-off-20-bold",
	});
}

export default Component;
