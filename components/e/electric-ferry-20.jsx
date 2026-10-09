import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry_fo9lxv.css';
import '../../css/x/x7suexyet.css';
import '../../css/e/eeqn6pbwj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry_fo9lxv"/><path class="x7suexyet"/><path class="eeqn6pbwj"/>`,
		"fallback": "energy-icons:electric-ferry-20",
	});
}

export default Component;
