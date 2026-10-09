import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6jd9_b7p.css';
import '../../css/b/bvgd0jb0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6jd9_b7p"/><path class="bvgd0jb0c"/>`,
		"fallback": "energy-icons:crane-hook-20-bold",
	});
}

export default Component;
