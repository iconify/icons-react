import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyee1r7bl.css';
import '../../css/r/rvcii1b1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyee1r7bl"/><path class="rvcii1b1l"/>`,
		"fallback": "energy-icons:dog-20-bold",
	});
}

export default Component;
