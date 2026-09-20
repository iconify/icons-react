import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik9kr5b8v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik9kr5b8v"/>`,
		"fallback": "memory:box-light-horizontal-up-stipple-up-left",
	});
}

export default Component;
