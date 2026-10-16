import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbmu3eofk.css';
import '../../css/q/qg7yfsbbq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbmu3eofk"/><path class="qg7yfsbbq"/>`,
		"fallback": "energy-icons:chisel-20-bold",
	});
}

export default Component;
