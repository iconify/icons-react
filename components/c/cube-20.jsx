import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0t5o3l-d.css';
import '../../css/k/k4k55lxkj.css';
import '../../css/v/vl7jw2b8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0t5o3l-d"/><path class="k4k55lxkj"/><path class="vl7jw2b8c"/>`,
		"fallback": "energy-icons:cube-20",
	});
}

export default Component;
