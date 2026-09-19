import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n73hnmbjh.css';
import '../../css/d/dztcfccam.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n73hnmbjh"/><path class="dztcfccam"/></g>`,
		"fallback": "glyphs:boxing-glove-bold",
	});
}

export default Component;
