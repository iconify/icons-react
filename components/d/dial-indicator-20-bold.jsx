import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptmrf5_xm.css';
import '../../css/j/j-b6puwvk.css';
import '../../css/j/jeh1gm_0y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptmrf5_xm"/><path class="j-b6puwvk"/><path class="jeh1gm_0y"/>`,
		"fallback": "energy-icons:dial-indicator-20-bold",
	});
}

export default Component;
