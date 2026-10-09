import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7aql7bvn.css';
import '../../css/j/j652cjm3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7aql7bvn"/><path class="j652cjm3d"/>`,
		"fallback": "energy-icons:gallery-20-bold",
	});
}

export default Component;
