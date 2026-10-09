import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2-id1m0v.css';
import '../../css/q/qq_-hzbne.css';
import '../../css/y/yv842m9yr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2-id1m0v"/><path class="qq_-hzbne"/><path class="yv842m9yr"/>`,
		"fallback": "energy-icons:beach-20-bold",
	});
}

export default Component;
