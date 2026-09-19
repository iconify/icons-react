import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbjmhzb7d.css';
import '../../css/s/st6sipqdt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbjmhzb7d"/><path class="st6sipqdt"/></g>`,
		"fallback": "glyphs:arrow-external-bold",
	});
}

export default Component;
