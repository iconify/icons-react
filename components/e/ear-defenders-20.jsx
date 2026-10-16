import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syjj109cb.css';
import '../../css/y/yk0otz46s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syjj109cb"/><path class="yk0otz46s"/>`,
		"fallback": "energy-icons:ear-defenders-20",
	});
}

export default Component;
