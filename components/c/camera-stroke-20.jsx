import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrvv8ub0p.css';
import '../../css/w/w0l__2bcq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrvv8ub0p"/><path class="w0l__2bcq"/>`,
		"fallback": "garden:camera-stroke-20",
	});
}

export default Component;
