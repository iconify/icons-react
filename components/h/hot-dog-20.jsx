import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv3c1ol4t.css';
import '../../css/y/yx--xhf4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv3c1ol4t"/><path class="yx--xhf4i"/>`,
		"fallback": "energy-icons:hot-dog-20",
	});
}

export default Component;
