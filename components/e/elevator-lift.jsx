import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/g/gd-wmxb1j.css';
import '../../css/x/xik9ggbvz.css';
import '../../css/r/rs-pgpc-q.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="gd-wmxb1j"/><path class="xik9ggbvz"/><path class="rs-pgpc-q"/></g>`,
		"fallback": "streamline-stickies-color:elevator-lift",
	});
}

export default Component;
