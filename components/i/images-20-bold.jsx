import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqa8c8hrf.css';
import '../../css/c/c4121g0qx.css';
import '../../css/n/ntm445bmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqa8c8hrf"/><path class="c4121g0qx"/><path class="ntm445bmd"/>`,
		"fallback": "energy-icons:images-20-bold",
	});
}

export default Component;
