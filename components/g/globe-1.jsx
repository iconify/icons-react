import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/t/te-a1p0fu.css';
import '../../css/s/s0h37_grs.css';
import '../../css/p/p4_7lpb6d.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="te-a1p0fu"/><path class="s0h37_grs"/><path class="p4_7lpb6d"/></g>`,
		"fallback": "streamline-stickies-color:globe-1",
	});
}

export default Component;
