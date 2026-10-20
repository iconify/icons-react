import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4g3nmxvh.css';
import '../../css/l/lkrm188_r.css';
import '../../css/o/omab5dbnu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4g3nmxvh"/><path class="lkrm188_r"/><path class="omab5dbnu"/>`,
		"fallback": "energy-icons:clock-alert-20",
	});
}

export default Component;
