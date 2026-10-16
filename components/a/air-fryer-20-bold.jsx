import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8irp8b8i.css';
import '../../css/u/ur2a2fbgl.css';
import '../../css/x/x3jkzl--z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8irp8b8i"/><path class="ur2a2fbgl"/><path class="x3jkzl--z"/>`,
		"fallback": "energy-icons:air-fryer-20-bold",
	});
}

export default Component;
