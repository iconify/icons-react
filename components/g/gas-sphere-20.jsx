import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whusgz6dz.css';
import '../../css/t/tx1qmhbzi.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whusgz6dz"/><path class="tx1qmhbzi"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:gas-sphere-20",
	});
}

export default Component;
