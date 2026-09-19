import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/k/kzo_wccxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="kzo_wccxk"/>`,
		"fallback": "ion:heart-circle-outline",
	});
}

export default Component;
