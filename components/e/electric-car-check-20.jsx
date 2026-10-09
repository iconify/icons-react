import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvhhtlbpu.css';
import '../../css/b/b3smm089e.css';
import '../../css/p/puz5jibvr.css';
import '../../css/m/mg--uz6gi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvhhtlbpu"/><path class="b3smm089e"/><path class="puz5jibvr"/><path class="mg--uz6gi"/>`,
		"fallback": "energy-icons:electric-car-check-20",
	});
}

export default Component;
