import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4g3nmxvh.css';
import '../../css/l/lkrm188_r.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4g3nmxvh"/><path class="lkrm188_r"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:clock-plus-20",
	});
}

export default Component;
