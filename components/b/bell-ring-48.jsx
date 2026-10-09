import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4vq0qbju.css';
import '../../css/y/yxy7ambyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4vq0qbju"/><path class="yxy7ambyf"/>`,
		"fallback": "energy-icons:bell-ring-48",
	});
}

export default Component;
