import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsw1rgb1l.css';
import '../../css/x/x3xddwbyo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsw1rgb1l"/><path class="x3xddwbyo"/>`,
		"fallback": "energy-icons:distribution-board-20",
	});
}

export default Component;
