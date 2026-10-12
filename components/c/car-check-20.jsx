import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvhhtlbpu.css';
import '../../css/k/kn7q06y6t.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvhhtlbpu"/><path class="kn7q06y6t"/><path class="puz5jibvr"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:car-check-20",
	});
}

export default Component;
