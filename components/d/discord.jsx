import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-r03e0fh.css';
import '../../css/f/f4wongbjq.css';
import '../../css/t/tir5l0bfj.css';
import '../../css/t/ty4swsb0t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-r03e0fh"/><path class="f4wongbjq"/><path class="tir5l0bfj"/><path class="ty4swsb0t"/></g>`,
		"fallback": "streamline-color:discord",
	});
}

export default Component;
